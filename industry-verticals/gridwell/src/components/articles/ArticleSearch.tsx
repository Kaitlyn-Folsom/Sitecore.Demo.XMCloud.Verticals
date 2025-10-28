import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ComponentProps } from 'lib/component-props';
import { Field, Text, withDatasourceCheck } from '@sitecore-content-sdk/nextjs'
import IconRenderer from '@/helpers/IconRenderer';

export type ArticleSearchProps = ComponentProps & {
  fields: {
    items: [{
      fields: {
        Title: Field<string>;
        Icon: {
          displayName: string;
        }
      }
    }]
  }
}

const ArticleSearch = (props: ArticleSearchProps): JSX.Element => {
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
    <section className={`mx-auto p-6 w-full ${sxaStyles}`}>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {props.fields.items.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-3 flex justify-center"><IconRenderer iconName={category.fields.Icon.displayName} /></div>
                <h3 className="font-medium text-sm mb-2"><Text field={category.fields.Title} /></h3>
                <Badge variant="outline" className={`text-xs ${getStatusColor(category.fields.Icon.displayName)}`}>
                  23 articles
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<ArticleSearchProps>(ArticleSearch);
