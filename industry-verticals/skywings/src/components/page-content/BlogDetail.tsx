import React, { JSX } from 'react';
import {
  RichText,
  Text,
  Field,
  RichTextField,
  ImageField,
  Image,
  DateField,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Heart, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { newsDateFormatter } from '../../helpers/DateHelper';

type BlogDetailProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Excerpt: Field<string>;
    PublishDate: Field<string>;
    Image: ImageField;
    Content: Field<string>;
    Author: {
      fields: {
        Name: Field<string>;
        Picture: ImageField;
        Bio: RichTextField
      }
    }
    ReadTime: Field<string>;
    Category: Field<string>;
  };
};

const BlogDetail = (props: BlogDetailProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <>
      <div className={`container mx-auto px-4 py-4 ${sxaStyles}`}>
        <Link href="/travelblog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="mb-6">
            <Badge className="mb-4"><Text field={props.fields.Category} /></Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={props.fields.Title} /></h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-2">
                <Image field={props.fields.Author.fields.Picture} 
                  width={32}
                  height={32}
                  className="rounded-full"
                /> 
                <span className="font-medium"><Text field={props.fields.Author.fields.Name} /></span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <DateField
                  tag="p"
                  className="news-date"
                  field={props.fields.PublishDate}
                  render={newsDateFormatter}
                />
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span><Text field={props.fields.ReadTime} /></span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-between border-y py-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  17 Likes
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  4 Shares
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="ghost" size="sm">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              field={props.fields.Image}
              width={1200}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <RichText field={props.fields.Content} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export const Default = BlogDetail;
