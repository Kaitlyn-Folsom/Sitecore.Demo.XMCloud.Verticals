import React, { JSX } from 'react';
import {
  RichText,
  Text,
  Field,
  ImageField,
  Image,
  DateField,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2,  ChevronLeft, User, Bookmark } from "lucide-react"
import Link from "next/link"
import { newsDateFormatter } from '../../helpers/DateHelper';
import { Card, CardContent } from '@/components/ui/card';

type ArticleDetailProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Excerpt: Field<string>;
    Content: Field<string>;
    Author: {
      value: string;
    }
    Category: {
      fields: {
        Title: Field<string>;
      }
    }
    SxaTags: [{
      fields: {
        Title: Field<string>;
      }
    }]
    PublishDate: Field<string>;
    Image: ImageField;
  };
};

const ArticleDetail = (props: ArticleDetailProps): JSX.Element => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Grid Operations":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Emergency Alerts":
        return "bg-red-100 text-red-800 border-red-200"
      case "Market Analysis":
        return "bg-green-100 text-green-800 border-green-200"
      case "Energy Tips":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Policy Updates":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Notifications":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const sxaStyles = `${props.params?.styles || ''}`;
  return (
    <>
      <div className={`max-w-4xl mx-auto ${sxaStyles}`}>
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/articles" className="flex items-center space-x-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Articles</span>
            </Link>
          </Button>
        </div>
        <article className="space-y-8">
          {/* Article Header */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className={getCategoryColor(props.fields?.Category?.fields?.Title?.value)}>
                <Text field={props.fields?.Category?.fields?.Title} />
              </Badge>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <DateField
                    field={props.fields?.PublishDate}
                    render={newsDateFormatter}
                  />
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{props.fields.Author.value}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-foreground text-balance"><Text field={props.fields.Title} /></h1>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image field={props.fields.Image} className="w-full h-full" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-foreground leading-relaxed">
              <RichText field={props.fields.Content} />
            </div>
          </div>

          <Placeholder name="article-detail" rendering={props.rendering} />

          {/* Tags */}
          <Card>
            <CardContent className="py-6">
              <h3 className="font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {props.fields.SxaTags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    <Text field={tag.fields.Title} />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </>
  );
};

export const Default = ArticleDetail;
