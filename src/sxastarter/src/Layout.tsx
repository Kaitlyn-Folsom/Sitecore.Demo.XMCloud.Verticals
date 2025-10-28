/**
 * This Layout is needed for Starter Kit.
 */
import React, { JSX } from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink, DesignLibrary, RenderingType } from '@sitecore-content-sdk/nextjs';
import scConfig from 'sitecore.config';
import Scripts from 'src/Scripts';
import { ParallaxProvider } from 'react-scroll-parallax';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = scConfig.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  const theme = layoutData.sitecore.context.theme as string;
  const contextSiteClass = `site-${theme?.toLowerCase()}`;

  const renderContent = () => (
    <>
      <header>
        <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
      </header>
      <main>
        <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
      </main>
      <footer>
        <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
      </footer>
    </>
  );

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <meta property="og:site" content={layoutData?.sitecore?.context?.site?.name} />
        <meta name="description" content="A Verticals demo site."></meta>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <ParallaxProvider>
        <div className={`${mainClassPageEditing} ${contextSiteClass} body`}>
          {layoutData.sitecore.context.renderingType === RenderingType.Component ? (<DesignLibrary {...layoutData} />) : (renderContent()
          )}
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Layout;
