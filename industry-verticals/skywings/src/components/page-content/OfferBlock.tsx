import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import {
  Text,
  Field,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type OfferBlockProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    SpecialOffers: [{
        fields: {
            Title: Field<string>;
            Text: Field<string>;
            Badge: Field<string>;
            Valid: Field<string>;
        }
    }]
  };
};

const OfferBlock = ({ fields, params }: OfferBlockProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
            <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fields.SpecialOffers.map((item, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                    <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900"><Text field={item.fields.Title} /></CardTitle>
                    <Badge variant="destructive" className="text-lg px-3 py-1">
                        <Text field={item.fields.Badge} />
                    </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 mb-4"><Text field={item.fields.Text} /></p>
                    <p className="text-sm text-blue-600 font-medium mb-4"><Text field={item.fields.Valid} /></p>
                    <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export const Default = withDatasourceCheck()<OfferBlockProps>(OfferBlock);
