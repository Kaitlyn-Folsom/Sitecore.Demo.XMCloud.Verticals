import React, { JSX } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck, Text, Field } from '@sitecore-content-sdk/nextjs';
import IconRenderer from '@/helpers/IconRenderer';

export type EnergyConservationTipsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Tips: [{
      fields: {
        Title: Field<string>;
        Text: Field<string>;
        Icon: {
            displayName: string;
        }
      }
    }]
  }
}

const EnergyConservationTips = (props: EnergyConservationTipsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`text-center p-12 ${sxaStyles}`}>
      <h2 className="text-3xl font-bold text-foreground mb-6"><Text field={props.fields.Title} /></h2>
      <Card>
        <CardHeader>
          <CardTitle><Text field={props.fields.Title} /></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {props.fields.Tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="text-primary mt-1"><IconRenderer iconName={tip.fields.Icon.displayName} /></div>
                <div>
                  <h4 className="font-medium text-sm"><Text field={tip.fields.Title} /></h4>
                  <p className="text-sm mt-1"><Text field={tip.fields.Text} /></p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export const Default = withDatasourceCheck()<EnergyConservationTipsProps>(EnergyConservationTips);