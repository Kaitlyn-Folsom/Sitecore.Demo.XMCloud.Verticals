import React, { JSX } from 'react'
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props';
import { AreaChart } from "@/components/charts/AreaChart"

export type ChartProps = ComponentProps & {
}

const demandChartData = [
  {
    CommittedCapacity: 83363,
    Demand: 63456,
    Hours: 0,
  },
  {
    CommittedCapacity: 81456,
    Demand: 59057,
    Hours: 1,
  },
  {
    CommittedCapacity: 80986,
    Demand: 57132,
    Hours: 2,
  },
  {
    CommittedCapacity: 79613,
    Demand: 55826,
    Hours: 3,
  },
  {
    CommittedCapacity: 76595,
    Demand: 54028,
    Hours: 4,
  },
  {
    CommittedCapacity: 77944,
    Demand: 55284,
    Hours: 5,
  },
    {
    CommittedCapacity: 78486,
    Demand: 56274,
    Hours: 6,
  },
      {
    CommittedCapacity: 77987,
    Demand: 58432,
    Hours: 7,
  },
{
    CommittedCapacity: 78818,
    Demand: 58023,
    Hours: 8,
  },
  {
    CommittedCapacity: 88171,
    Demand: 64028,
    Hours: 9,
  },
  {
    CommittedCapacity: 97885,
    Demand: 70321,
    Hours: 10,
  },
   {
    CommittedCapacity: 101119,
    Demand: 71456,
    Hours: 11,
  },
  {
    CommittedCapacity: 100902,
    Demand: 73000,
    Hours: 12,
  },
  {
    CommittedCapacity: 99860,
    Demand: 77432,
    Hours: 13,
  },
    {
    CommittedCapacity: 100658,
    Demand: 79436,
    Hours: 14,
  },
    {
    CommittedCapacity: 101415,
    Demand: 79093,
    Hours: 15,
  },
    {
    CommittedCapacity: 106842,
    Demand: 81202,
    Hours: 16,
  },
    {
    CommittedCapacity: 106866,
    Demand: 82445,
    Hours: 17,
  },
     {
    CommittedCapacity: 103374,
    Demand: 81200,
    Hours: 18,
  },
       {
    CommittedCapacity: 93601,
    Demand: 79237,
    Hours: 19,
  },
       {
    CommittedCapacity: 83425,
    Demand: 76910,
    Hours: 20,
  },
         {
    CommittedCapacity: 85581,
    Demand: 74536,
    Hours: 21,
  },
         {
    CommittedCapacity: 84765,
    Demand: 71645,
    Hours: 22,
  },
         {
    CommittedCapacity: 86234,
    Demand: 66359,
    Hours: 23,
  },
         {
    CommittedCapacity: 83756,
    Demand: 63518,
    Hours: 24,
  }

]

const SupplyAndDemandChart = (props: ChartProps): JSX.Element => {

  const sxaStyles = `${props.params?.styles || ''}`;

    return (
        <section className={`mx-auto px-8 py-4 w-full ${sxaStyles} mt-8`}>
            <Card className="p-8">
                <CardTitle className="text-3xl font-bold text-foreground">Supply and Demand</CardTitle>
                <CardDescription className="text-gray-900">Supply and demand is a graphical representation of the Gridwell systems current power supply (capacity) and demand using Real-Time data, as well as projected power supply (capacity) and demand from hourly forecasts and seasonal forecasts. </CardDescription>
                <AreaChart
                className="h-70"
                data={demandChartData}
                index="Hours"
                categories={["CommittedCapacity", "Demand"]}
                valueFormatter={(number: number) =>
                `${Intl.NumberFormat("en-US", {notation: 'compact', compactDisplay: 'short'}).format(number).toString()}`
                }
                colors={['fuchsia', 'cyan']}
                yAxisLabel="MW"
                maxValue={125000}
            />
            </Card>

        </section>

    )
}

export const Default = SupplyAndDemandChart;