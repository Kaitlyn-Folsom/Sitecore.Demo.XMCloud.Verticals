import React, { JSX } from 'react'
import { Field, Text, withDatasourceCheck, Link, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type QuickActionsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    QuickActions: [{
      fields: {
        Title: Field<string>;
        Text: Field<string>;
        Link: LinkField;
      }
    }]
  }
}

const QuickActions = (props: QuickActionsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`mb-12 p-6 ${sxaStyles}`}>
      <h2 className="text-3xl font-bold text-foreground mb-6"><Text field={props.fields.Title} /></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.fields.QuickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <span><Text field={action.fields.Title} /></span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <Text field={action.fields.Text} />
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link field={action.fields.Link} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<QuickActionsProps>(QuickActions);
