import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ComponentProps } from 'lib/component-props';
import { DateField, Field, Text, withDatasourceCheck, Image, ImageField } from '@sitecore-content-sdk/nextjs'
import { newsDateFormatter } from '../../helpers/DateHelper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export type LatestArticlesProps = ComponentProps & {
  fields: {
    items: [{
      url: string;
      fields: {
        Title: Field<string>;
        Excerpt: Field<string>;
        Content: Field<string>;
        Author: {
          value: string;
        }
        Category: {
          fields: {
            displayName: string;
          }
        }
        PublishDate: Field<string>;
        Image: ImageField;
      }
    }]
  }
}

const LatestArticles = (props: LatestArticlesProps): JSX.Element => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Zap":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "AlertTriangle":
        return "bg-red-100 text-red-800 border-red-200"
      case "BarChart3":
        return "bg-green-100 text-green-800 border-green-200"
      case "Lightbulb":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "FileText":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Notifications":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <div className={`mx-auto p-6 w-full ${sxaStyles}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
        <Button variant="outline" size="sm">
          View All Articles
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.fields.items.map((article, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <Image field={article?.fields?.Image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className={`text-xs ${getStatusColor(article?.fields?.Category?.fields?.displayName)}`}>
                  {article?.fields?.Category?.fields?.displayName}
                </Badge>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <DateField
                        field={article?.fields?.PublishDate}
                        render={newsDateFormatter}
                      />
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-foreground mb-2 text-balance hover:text-primary">
                <Link href={article?.url}><Text field={article?.fields?.Title} /></Link>
              </h3>

              <p className="text-sm mb-4 leading-relaxed"><Text field={article?.fields?.Excerpt} /></p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs">
                  <User className="h-3 w-3" />
                  <span>{article?.fields?.Author?.value}</span>
                </div>

                <Button variant="ghost" size="sm" asChild>
                  <Link href={article?.url} className="flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const Default = withDatasourceCheck()<LatestArticlesProps>(LatestArticles);
