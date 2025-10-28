import React, { JSX } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props';

export type ChartProps = ComponentProps & {
}

const GridConditionsChart = (props: ChartProps): JSX.Element => {

  const reserves = 13532

  const segments = Array.from({ length: 10 }, (_, i) => {
    const angle = i * 18 - 170 // Start from top, 18 degrees per segment
    const x1 = 140 + 100 * Math.cos((angle * Math.PI) / 180)
    const y1 = 120 + 100 * Math.sin((angle * Math.PI) / 180)
    const x2 = 140 + 120 * Math.cos((angle * Math.PI) / 180)
    const y2 = 120 + 120 * Math.sin((angle * Math.PI) / 180)

    return { x1, y1, x2, y2, angle }
  })

  const sxaStyles = `${props.params?.styles || ''}`;

    return (
        <section className={`mx-auto px-8 py-6 w-full ${sxaStyles}`}>
            <Card>
                <CardTitle className="text-3xl font-bold text-foreground text-center">Grid Conditions</CardTitle>
                <CardContent className="flex flex-col items-center">
                  <div className="relative w-120 h-64 flex items-center justify-center mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 285 130">
            {segments.map((segment, i) => (
              <line
                key={i}
                x1={segment.x1}
                y1={segment.y1}
                x2={segment.x2}
                y2={segment.y2}
                stroke="rgb(34, 197, 94)"
                strokeWidth="16"
                strokeLinecap="round"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-24">
            <div className="text-blue-600 font-semibold text-lg mb-1">OPERATING RESERVES</div>
            <div className="text-3xl font-bold text-foreground mb-3">{reserves.toLocaleString()} MW</div>
            <div className="text-lg font-semibold text-foreground mb-2">NORMAL CONDITIONS</div>
            <div className="text-sm text-muted-foreground max-w-56">There is enough power for current demand.</div>
          </div>
                  </div>

                </CardContent>
            </Card>

        </section>

    )
}

export const Default = GridConditionsChart;