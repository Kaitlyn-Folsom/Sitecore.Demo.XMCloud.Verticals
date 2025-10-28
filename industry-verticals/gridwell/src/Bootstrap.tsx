import { useEffect, JSX } from 'react';
import { CloudSDK } from '@sitecore-cloudsdk/core/browser';
import { SitecorePageProps } from '@sitecore-content-sdk/nextjs';
import '@sitecore-cloudsdk/events/browser';
import "@sitecore-cloudsdk/search/browser";
import scConfig from 'sitecore.config';

/**
 * The Bootstrap component is the entry point for performing any initialization logic
 * that needs to happen early in the application's lifecycle.
 */
const Bootstrap = (props: SitecorePageProps): JSX.Element | null => {
  const { page } = props;

  // Browser ClientSDK init allows for page view events to be tracked
  console.log("bootstrap stuffs")
  useEffect(() => {
    if (!page) {
      return;
    }
console.log("more bootstrap stuffs");
    //const mode = page.mode;
    // if (process.env.NODE_ENV === 'development'){
    //   console.debug('Browser Events SDK is not initialized in development environment');
    // console.log("oh no, we are in development");}
    // else if (!mode.isNormal) {
    //   console.debug('Browser Events SDK is not initialized in edit and preview modes');
    //   console.log("oh no, we are not in normal pagemode");
    // }
    //else {
      console.log(scConfig.api.edge.clientContextId);
      if (scConfig.api.edge?.clientContextId) {
        console.log ("starting with the cloudsdk stuffs");
        CloudSDK({
          sitecoreEdgeUrl: scConfig.api.edge.edgeUrl,
          sitecoreEdgeContextId: scConfig.api.edge.clientContextId,
          siteName: page.siteName || scConfig.defaultSite,
          enableBrowserCookie: true,
          // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
          cookieDomain: window.location.hostname.replace(/^www\./, ''),
        })
          .addEvents()
          .addSearch()
          .initialize()
      } else {
        console.error('Client Edge API settings missing from configuration');
      }
   // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page?.siteName]);

  return null;
};

export default Bootstrap;
