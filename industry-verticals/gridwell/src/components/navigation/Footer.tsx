import React, { JSX } from 'react'
import Link from "next/link"
import { Zap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Field, Text, withDatasourceCheck } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

export type FooterProps = ComponentProps & {
  fields: {
    data: {
      links: {
        Title: {
          jsonValue: {
            value: string;
          }
        },
        Subtitle: {
          jsonValue: {
            value: string;
          }
        },
        ContactHeader: Field<string>,
        Email: Field<string>,
        PhoneNumber: Field<string>,
        Additional: Field<string>,
        children: {
          results: [
            {
              displayName: string;
              Title: Field<string>;
              children: {
                results: [
                  {
                    displayName: string;
                    Link: {
                      jsonValue: {
                        value: {
                          anchor: string;
                          href: string;
                          linktype: string;
                          target: string;
                          text: string;
                          url: string;
                        };
                      };
                    };
                  }
                ];
              };
            }
          ];
        };
      };
    };
  };
};

const Footer = (props: FooterProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <footer className={`bg-gray-900 text-white ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold"><Text field={props.fields.data.links.Title.jsonValue} /></span>
            </div>
            <p className="text-gray-300">
              <Text field={props.fields.data.links.Subtitle.jsonValue} />
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>

          {props.fields?.data.links.children.results.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4"><Text field={section.Title} /></h3>
              <ul className="space-y-2">
                {section.children.results.map((link, i) => (
                  <li key={i}>
                    <Link href={link.Link.jsonValue.value.href} className="text-gray-400 hover:text-white">
                      {link.displayName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Gridwell. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-emerald-400 text-sm">
                Accessibility
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Default = withDatasourceCheck()<FooterProps>(Footer);
