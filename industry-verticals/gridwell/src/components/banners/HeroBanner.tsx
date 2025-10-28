import React, { JSX } from 'react'
import { Button } from "@/components/ui/button"
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck, Text, Field, Image, ImageField, LinkField, Link } from '@sitecore-content-sdk/nextjs';

export type HeroBannerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    Image: ImageField;
    CTA1: LinkField;
    CTA2: LinkField;
  }
}

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`text-center py-12 ${sxaStyles}`}>
      <div className="absolute m-auto w-full mt-[100px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-primary">
          <Text field={props.fields.Title} />
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-bold">
          <Text field={props.fields.Subtitle} />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link field={props.fields.CTA1} />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link field={props.fields.CTA2} />
          </Button>
        </div>
      </div>
      <Image field={props.fields.Image} className="h-96" height="300" />

    </section>
  )
}

export const Default = withDatasourceCheck()<HeroBannerProps>(HeroBanner);
