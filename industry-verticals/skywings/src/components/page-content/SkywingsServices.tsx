// TODO: This is currently entirely hardcoded and not applicable for any other travel & hospitality site
import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import {
  Field,
  Text,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import {
  Star,
  Shield,
  Clock,
  Headphones,
  Wifi,
  Coffee,
  Luggage,
} from "lucide-react"

export type SkyWingsServicesProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
  };
};

const SkyWingsServices = ({ fields, params }: SkyWingsServicesProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <>
        <section className={`py-16 ${sxaStyles}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
                    <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                    {
                        icon: <Shield className="h-12 w-12 text-blue-600" />,
                        title: "Safe & Secure",
                        description: "Your safety is our top priority with industry-leading security measures",
                    },
                    {
                        icon: <Clock className="h-12 w-12 text-blue-600" />,
                        title: "On-Time Performance",
                        description: "98% on-time arrival rate with reliable scheduling you can count on",
                    },
                    {
                        icon: <Headphones className="h-12 w-12 text-blue-600" />,
                        title: "24/7 Support",
                        description: "Round-the-clock customer service to assist you whenever you need",
                    },
                    {
                        icon: <Star className="h-12 w-12 text-blue-600" />,
                        title: "Premium Experience",
                        description: "Luxury amenities and exceptional service at every step of your journey",
                    },
                    ].map((service, index) => (
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">In-Flight Experience</h2>
                    <p className="text-xl text-gray-600">Enjoy premium amenities designed for your comfort</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {[
                    { icon: <Wifi className="h-8 w-8" />, label: "Free WiFi" },
                    { icon: <Coffee className="h-8 w-8" />, label: "Premium Dining" },
                    { icon: <Luggage className="h-8 w-8" />, label: "Extra Baggage" },
                    { icon: <Star className="h-8 w-8" />, label: "Priority Boarding" },
                    { icon: <Shield className="h-8 w-8" />, label: "Travel Insurance" },
                    { icon: <Headphones className="h-8 w-8" />, label: "Entertainment" },
                    ].map((amenity, index) => (
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-3 text-blue-600">{amenity.icon}</div>
                        <p className="text-sm font-medium text-gray-700">{amenity.label}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
      </>
  );
};

export const Default = withDatasourceCheck()<SkyWingsServicesProps>(SkyWingsServices);
