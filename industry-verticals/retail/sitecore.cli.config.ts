import scConfig from './sitecore.config';
import { defineCliConfig } from '@sitecore-content-sdk/nextjs/config-cli';
import {
  generateSites,
  generateMetadata,
  extractFiles,
  writeImportMap,
} from '@sitecore-content-sdk/nextjs/tools';

export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(),
      generateSites({
        scConfig: scConfig,
      }),
      extractFiles({
        scConfig: scConfig,
      }),
      writeImportMap({
        paths: ['src/components'],
        scConfig,
      }),
    ],
  },
  componentMap: {
    paths: ['src/components'],
    // Exclude content-sdk and other auxillary components
    exclude: ['src/components/content-sdk/*', 'src/components/non-sitecore/*'],
  },
});
