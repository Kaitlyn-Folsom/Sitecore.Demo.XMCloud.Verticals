// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as progress from 'src/components/ui/progress';
import * as card from 'src/components/ui/card';
import * as button from 'src/components/ui/button';
import * as badge from 'src/components/ui/badge';
import * as SuggestionBlock from 'src/components/search/SuggestionBlock';
import * as Spinner from 'src/components/search/Spinner';
import * as PreviewSearch from 'src/components/search/PreviewSearch';
import * as HighlightedArticles from 'src/components/search/HighlightedArticles';
import * as ArticleRecommender from 'src/components/search/ArticleRecommender';
import * as ArticleCard from 'src/components/search/ArticleCard';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as QuickActions from 'src/components/page-content/QuickActions';
import * as Promo from 'src/components/page-content/Promo';
import * as EnergyConservationTips from 'src/components/page-content/EnergyConservationTips';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as chartUtils from 'src/components/lib/chartUtils';
import * as SystemWideDemandChart from 'src/components/grid/SystemWideDemandChart';
import * as SupplyAndDemandChart from 'src/components/grid/SupplyAndDemandChart';
import * as GridOverview from 'src/components/grid/GridOverview';
import * as GridConditions from 'src/components/grid/GridConditions';
import * as AreaChart from 'src/components/charts/AreaChart';
import * as HeroBanner from 'src/components/banners/HeroBanner';
import * as LatestArticles from 'src/components/articles/LatestArticles';
import * as ArticleSearch from 'src/components/articles/ArticleSearch';
import * as ArticleDetail from 'src/components/articles/ArticleDetail';
import * as SearchResults from 'src/components/search/SearchResults';



// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['progress', progress],
  ['card', card],
  ['button', button],
  ['badge', badge],
  ['SuggestionBlock', SuggestionBlock],
  ['Spinner', Spinner],
  ['PreviewSearch', PreviewSearch],
  ['HighlightedArticles', HighlightedArticles],
  ['ArticleRecommender', ArticleRecommender],
  ['ArticleCard', ArticleCard],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['QuickActions', QuickActions],
  ['Promo', Promo],
  ['EnergyConservationTips', EnergyConservationTips],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['chartUtils', chartUtils],
  ['SystemWideDemandChart', SystemWideDemandChart],
  ['SupplyAndDemandChart', SupplyAndDemandChart],
  ['GridOverview', GridOverview],
  ['GridConditions', GridConditions],
  ['AreaChart', AreaChart],
  ['HeroBanner', HeroBanner],
  ['LatestArticles', LatestArticles],
  ['ArticleSearch', ArticleSearch],
  ['ArticleDetail', ArticleDetail],
  ['SearchResults', SearchResults],
]);

export default componentMap;
