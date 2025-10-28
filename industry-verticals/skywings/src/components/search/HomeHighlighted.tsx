import { JSX } from 'react';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import ArticleCard from './ArticleCard';
import { handleSearch } from './HandleSearch';
import { HOMEHIGHLIGHTED_WIDGET_ID } from '@/_data/customizations';

const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

export const HomeHighlightedComponent = (): JSX.Element => {
  const {
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'Destinations'));

      if (SEARCH_CONFIG.source !== '') {
        const sources = SEARCH_CONFIG.source.split('|');
        sources.forEach((source) => {
          query.getRequest().addSource(source.trim());
        });
      }
    },
  });

  const articlesToShow = articles.slice(0, 4);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="my-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Get Inspired</h2>
          <p className="text-xl text-gray-600">
            Discover amazing destinations and travel tips from our latest stories
          </p>
        </div>
        <div className="my-10 flex w-full justify-around text-gray-900 dark:text-gray-200">
          <div className="grid grid-cols-4 gap-x-5 gap-y-3">
            {articlesToShow.map((a, index) => (
              <ArticleCard
                article={a}
                key={index}
                index={index}
                onItemClick={(e) => {
                  handleSearch(
                    e,
                    a.url,
                    HOMEHIGHLIGHTED_WIDGET_ID,
                    'content',
                    ['EntityPageView', 'SearchClickEvent'],
                    a.id,
                    index
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
