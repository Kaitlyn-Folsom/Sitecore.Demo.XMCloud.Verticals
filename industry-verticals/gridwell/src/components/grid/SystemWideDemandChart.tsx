import React, { JSX } from 'react'
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props';
import { AreaChart } from "@/components/charts/AreaChart"

export type ChartProps = ComponentProps & {
}

const demandChartData = [
  {
    CurrentForecast: 60329,
    DayAheadForecast: 58408,
    Hours: 0,
  },
  {
    CurrentForecast: 58186,
    DayAheadForecast: 56158,
    Hours: 1,
  },
  {
    CurrentForecast: 56271,
    DayAheadForecast: 56158,
    Hours: 2,
  },
  {
    CurrentForecast: 56271,
    DayAheadForecast: 54823,
    Hours: 3,
  },
  {
    CurrentForecast: 55136,
    DayAheadForecast: 53568,
    Hours: 4,
  },
  {
    CurrentForecast: 54801,
    DayAheadForecast: 53140,
    Hours: 5,
  },
    {
    CurrentForecast: 56397,
    DayAheadForecast: 53908,
    Hours: 6,
  },
      {
    CurrentForecast: 57996,
    DayAheadForecast: 55884,
    Hours: 7,
  },
{
    CurrentForecast: 58418,
    DayAheadForecast: 56682,
    Hours: 8,
  },
  {
    CurrentForecast: 60282,
    DayAheadForecast: 59518,
    Hours: 9,
  },
  {
    CurrentForecast: 64655,
    DayAheadForecast: 65002,
    Hours: 10,
  },
   {
    CurrentForecast: 72298,
    DayAheadForecast: 67946,
    Hours: 11,
  },
  {
    CurrentForecast: 76130,
    DayAheadForecast: 71016,
    Hours: 12,
  },
  {
    CurrentForecast: 75261,
    DayAheadForecast: 74560,
    Hours: 13,
  },
    {
    CurrentForecast: 78613,
    DayAheadForecast: 77768,
    Hours: 14,
  },
    {
    CurrentForecast: 80621,
    DayAheadForecast: 79852,
    Hours: 15,
  },
    {
    CurrentForecast: 81585,
    DayAheadForecast: 81202,
    Hours: 16,
  },
    {
    CurrentForecast: 82194,
    DayAheadForecast: 81000,
    Hours: 17,
  },
     {
    CurrentForecast: 81893,
    DayAheadForecast: 81200,
    Hours: 18,
  },
       {
    CurrentForecast: 79973,
    DayAheadForecast: 79237,
    Hours: 19,
  },
       {
    CurrentForecast: 77680,
    DayAheadForecast: 76910,
    Hours: 20,
  },
         {
    CurrentForecast: 75296,
    DayAheadForecast: 74536,
    Hours: 21,
  },
         {
    CurrentForecast: 72323,
    DayAheadForecast: 71645,
    Hours: 22,
  },
         {
    CurrentForecast: 67965,
    DayAheadForecast: 66359,
    Hours: 23,
  },
         {
    CurrentForecast: 63955,
    DayAheadForecast: 63518,
    Hours: 24,
  }

]

const SystemWideDemandChart = (props: ChartProps): JSX.Element => {

  const sxaStyles = `${props.params?.styles || ''}`;

    return (
        <section className={`mx-auto px-8 py-4 w-full ${sxaStyles} mt-8`}>
            <Card className="p-8">
                <CardTitle className="text-3xl font-bold text-foreground">System-Wide Demand</CardTitle>
                <CardDescription className="text-gray-900">System-Wide Demand is a graphical representation of the ERCOT system’s current power supply and demand using real-time data, as well as projected power supply and demand from hourly forecasts.</CardDescription>
                <AreaChart
                className="h-70"
                data={demandChartData}
                index="Hours"
                categories={["CurrentForecast", "DayAheadForecast"]}
                valueFormatter={(number: number) =>
                `${Intl.NumberFormat("en-US", {notation: 'compact', compactDisplay: 'short'}).format(number).toString()}`
                }
                colors={['blue', 'emerald']}
                yAxisLabel="MW"
                minValue={50000}
                maxValue={90000}
                fill="none"
            />
            </Card>

        </section>

    )
}

export const Default = SystemWideDemandChart;