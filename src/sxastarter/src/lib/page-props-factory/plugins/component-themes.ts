import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';
import config from 'temp/config';
import { getDesignLibraryStylesheetLinks } from '@sitecore-content-sdk/nextjs';

class ComponentThemesPlugin implements Plugin {
  // Make sure to run this plugin after the personalization plugin, since it relies on the layout data
  order = 10;

  async exec(props: SitecorePageProps) {
    // Collect FEAAS, BYOC, SXA component themes
    props.headLinks.push(
      ...getDesignLibraryStylesheetLinks(
        props.layoutData,
        config.sitecoreEdgeContextId,
        config.sitecoreEdgeUrl
      ))
    return props;
  }
}

export const componentThemesPlugin = new ComponentThemesPlugin();
