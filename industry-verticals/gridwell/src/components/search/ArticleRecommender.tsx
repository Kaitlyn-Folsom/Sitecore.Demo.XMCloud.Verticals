import React, { JSX, useState, useEffect } from 'react'
import { ComponentProps } from 'lib/component-props';
//import HomeHighlighted from './HighlightedArticles';
import {
  Context,
  getWidgetData,
  SearchWidgetItem,
  WidgetRequestData
} from "@sitecore-cloudsdk/search/browser";

export type ArticleRecommenderProps = ComponentProps & {
  params: { [key: string]: string };
}

const ArticleRecommender = (props: ArticleRecommenderProps): JSX.Element => {
  // Create a data state variable to store the received data:
  const [products, setProducts] = useState<any[]>([]); // In production, replace `any[]` with the interface of your choice for your products
  const sxaStyles = `${props.params?.styles || ''}`;
  // Perform the initial data request:
  useEffect(() => {
    async function fetchData() {
      const widgetRequest = new SearchWidgetItem("content", "search_home_highlighted_articles_gridwell"); // Create a new widget request
      widgetRequest.content = {}; // Request all attributes for the entity
      widgetRequest.limit = 3; // Limit the number of results to 10
      // if (props.params['source']) {
      //   widgetRequest.sources = [props.params['source']];
      // } // Optionally, return results only from specific sources
      // Create a new context with the locale set to "EN" and "us".
      // Depending on your Sitecore Search configuration, using `Context` might be optional:
      const context = new Context({
        locale: { language: "EN", country: "us" },
      });
      // Call the `getWidgetData` function with the widget request and the context to request the data:
      const response = await getWidgetData(
        new WidgetRequestData([widgetRequest]),
        context
      );
      if (!response) return console.warn("No search results found.");
      // Set the received data to the state variable:
      const currentProducts = response.widgets?.[0]?.content || [];
      setProducts(currentProducts);
    }
    fetchData();
  }, [props.params]);

  console.log(products);
  return (
    <div className={`${sxaStyles}`}>
      Products here:
      {products && (
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );










  // //  const rfkId = props.params['RFKID'];
  //   const rfkId = "rfkid_2";
  //   console.log(props);

  //   // if (rfkId === "") {
  //   //   return (
  //   //     <div className={`${sxaStyles}`}>
  //   //       RFK ID is not set.
  //   //     </div>
  //   //   )
  //   // }

  //   return (
  //     <div className={`${sxaStyles}`}>
  //       <HomeHighlighted rfkId={rfkId} />
  //     </div>
  //   )
}

export const Default = ArticleRecommender; // withPageTracking(ArticleRecommender);
