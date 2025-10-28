import { SiteInfo } from '@sitecore-content-sdk/nextjs/site';
import scConfig from 'sitecore.config';
import { SiteResolverPlugin } from '..';

class MultisitePlugin implements SiteResolverPlugin {
  exec(sites: SiteInfo[]): SiteInfo[] {
    // Add preloaded sites
    sites.push(...(JSON.parse(scConfig.sites) as SiteInfo[]));

    return sites;
  }
}

export const multisitePlugin = new MultisitePlugin();
