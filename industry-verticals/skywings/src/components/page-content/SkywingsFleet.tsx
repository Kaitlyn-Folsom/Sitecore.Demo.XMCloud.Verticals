// TODO: Hardcoded at the moment. Would be good to make more dynamic so it's applicable in other travel & hospitality sites
import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import {
  Text,
  RichText,
  Field,
  ImageField,
  Image,
  withDatasourceCheck,
  RichTextField,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type SkyWingsFleetProps = ComponentProps & {
  fields: {
    Image: ImageField;
    Title: Field<string>;
    Subtitle: Field<string>;
    HighlightedClasses: [{
        fields: {
            Title: Field<string>;
            Image: ImageField;
            Content: RichTextField;            
        }
    }]
  };
};

const SkyWingsFleet = ({ fields, params }: SkyWingsFleetProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
            <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Aircraft Image */}
            <div className="relative">
              <Image field={fields.Image} alt={fields.Title.value} width={600} height={400} loading="lazy" className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Fleet</h3>
                <p className="text-lg">State-of-the-art Boeing 787 Dreamliners</p>
              </div>
            </div>

            {/* Fleet Stats */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-700">Aircraft in Fleet</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2.5</div>
                  <div className="text-gray-700">Years Average Age</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">On-Time Performance</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700">Daily Flights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cabin Classes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fields.HighlightedClasses.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                    <Image field={item.fields.Image} alt={item.fields.Title.value} width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                    <Badge className="absolute top-4 left-4 bg-yellow-600">{item.fields.Title.value}</Badge>
                </div>
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"><Text field={item.fields.Title} /></h3>
                    <div className="text-gray-600 mb-4">
                        <RichText field={item.fields.Content} />
                    </div>
                </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export const Default = withDatasourceCheck()<SkyWingsFleetProps>(SkyWingsFleet);
