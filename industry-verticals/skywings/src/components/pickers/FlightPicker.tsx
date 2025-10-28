import React, { JSX } from 'react';
import {
  Field,
  Text,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  Plane,
  MapPin,
  CalendarIcon,
  Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type FlightPickerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Slogan: Field<string>;
    ButtonText: Field<string>;
  };
};

const FlightPicker = (props: FlightPickerProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`relative bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-[url('https://starter-verticals.sitecoresandbox.cloud/api/public/content/921360c84bdf415f8ac85a582f29fcb0?v=c7501288')] bg-cover bg-center ${sxaStyles}`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 opacity-[0.9]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><Text field={props.fields.Title} /></h1>
          <p className="text-xl md:text-2xl text-blue-100">
            <Text field={props.fields.Slogan} />
          </p>
        </div>

        {/* Flight Search Form */}
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="default" size="sm">
                Round Trip
              </Button>
              <Button variant="outline" size="sm">
                One Way
              </Button>
              <Button variant="outline" size="sm">
                Multi-city
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Departure city" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Destination city" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Departure</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Return</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Passengers</label>
                <Select>
                  <SelectTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="1 Adult" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4+ Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                <Plane className="mr-2 h-5 w-5" />
                <Text field={props.fields.ButtonText} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<FlightPickerProps>(FlightPicker);
