import React, { JSX } from 'react';
import Link from 'next/link';
import {
  DateField,
  Image,
  withDatasourceCheck,
  Text,
  RichText,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { BlogDetail } from 'src/types/blogs';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { newsDateFormatter } from '../../helpers/DateHelper';

type LatestBlogGridProps = ComponentProps & {
  fields: {
    items: BlogDetail[];
  };
};

const LatestBlogGrid = (props: LatestBlogGridProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  console.log(props);

  return (
    <>
      <section className={`py-16 bg-white ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Inspired</h2>
            <p className="text-xl text-gray-600">
              Discover amazing destinations and travel tips from our latest stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.fields.items
              .sort((a, b) => a.fields.PublishDate.value.localeCompare(b.fields.PublishDate.value))
              .reverse()
              .slice(0, 4)
              .map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative">
                    <Image
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      field={news.fields.Image}
                      width="300px"
                      height="200px"
                      loading="lazy"
                    />
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white"><Text field={news.fields.Category} /></Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Text field={news.fields.Title} />
                    </h3>
                    <div className="text-gray-600 text-sm mb-3 line-clamp-2"><RichText field={news.fields.Excerpt} /></div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span><Text field={news.fields.Author} /></span>
                      <span>
                        <DateField
                          tag="p"
                          className="news-date"
                          field={news.fields.PublishDate}
                          render={newsDateFormatter}
                        />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500"><Text field={news.fields.ReadTime} /></span>
                      <Link href={news.url} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))};
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const Default = withDatasourceCheck()<LatestBlogGridProps>(LatestBlogGrid);
