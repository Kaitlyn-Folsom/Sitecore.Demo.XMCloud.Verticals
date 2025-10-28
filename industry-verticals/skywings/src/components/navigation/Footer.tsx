import React, { JSX } from 'react';
import Link from 'next/link';
import { Field, Text } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  Plane,
  CreditCard,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

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
    <footer className={`bg-gray-900 text-white py-12 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold"><Text field={props.fields.data.links.Title.jsonValue} /></span>
            </div>
            <p className="text-gray-400 mb-4"><Text field={props.fields.data.links.Subtitle.jsonValue} /></p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
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
          <div>
            <h3 className="text-lg font-semibold mb-4"><Text field={props.fields.data.links.ContactHeader} /></h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400"><Text field={props.fields.data.links.PhoneNumber} /></span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400"><Text field={props.fields.data.links.Email} /></span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400"><Text field={props.fields.data.links.Additional} /></span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SkyWings Airlines. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Default = Footer;
