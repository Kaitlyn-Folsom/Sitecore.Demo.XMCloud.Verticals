import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import {
  Text,
  Field,
  ImageField,
  Image,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type SkyWingsDestinationsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    url: string;
    SelectedDestinations: [{
      fields: {
        BestMonths: Field<string>;
        Content: Field<string>;
        ExpectedTemps: Field<string>;
        Image: ImageField;
        Price: Field<string>;
        Rating: Field<string>;
        SuggestedDuration: Field<string>;
        Title: Field<string>;
        Country: {
          fields: {
            Name: Field<string>;
          }
        }
      }
    }]
  };
};

const SkyWingsDestinations = ({ fields, params }: SkyWingsDestinationsProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 bg-gray-50 ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
            <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fields.SelectedDestinations.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image field={item.fields.Image} alt={item.fields.Title.value} width={400} height={300} loading="lazy" className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-blue-600"><Text field={item.fields.Price} /></Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900"><Text field={item.fields.Title} /></h3>
                  <p className="text-gray-600"><Text field={item.fields.Country.fields.Name} /></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export const Default = withDatasourceCheck()<SkyWingsDestinationsProps>(SkyWingsDestinations);
