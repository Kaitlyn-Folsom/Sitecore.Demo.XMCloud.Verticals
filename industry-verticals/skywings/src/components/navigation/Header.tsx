import Link from 'next/link';
import React, { JSX, useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import { useI18n } from 'next-localization';
import {
  Plane,
} from "lucide-react"
import PreviewSearch from '../search/PreviewSearch';

export type HeaderProps = ComponentProps & {
  fields: {
    items: [{
      displayName: string;
      fields: {
        Link: {
          value: {
            anchor: string;
            href: string;
            linktype: string;
            target: string;
            text: string;
          };
        };
      };
    }];
  };
};

export const Header = (props: HeaderProps): JSX.Element => {
  const { t } = useI18n();
  const sxaStyles = `${props.params?.styles || ''}`;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={`border-b bg-white sticky top-0 z-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2"><Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">SkyWings</span></a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {props.fields?.items?.map((item, index) => (
              <Link key={index} href={item.fields?.Link?.value?.href ?? '#'} prefetch={false} className="text-gray-700 hover:text-blue-600 font-medium">
                {item.displayName}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link href="#">
              {t('Sign In') || 'Sign In'}
            </Link>
            <Link href="/tickets" className="btn-main">
              {t('Join SkyWings') || 'Join SkyWings'}
            </Link>
          </div>
        </div>
        {isSearchOpen && (
          <div className="absolute top-full right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-lg">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex items-center gap-2">
                <PreviewSearch
                  rfkId="skywings_preview_search"
                  isOpen={isSearchOpen}
                  setIsSearchOpen={setIsSearchOpen}
                />

                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 text-gray-500 transition-colors hover:text-gray-700"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export const Default = Header;