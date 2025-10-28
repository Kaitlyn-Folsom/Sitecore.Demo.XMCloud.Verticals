import React, { JSX } from 'react';
// DEMO TEAM CUSTOMIZATION - Removed Field and Text. Added RichTextField.
import {
  Link as JssLink,
  RichText,
  ImageField,
  Image,
  LinkField,
  RichTextField,
} from '@sitecore-content-sdk/nextjs';
// END CUSTOMIZATION

interface Fields {
  PromoIcon: ImageField;
  PromoIcon2: ImageField; // DEMO TEAM CUSTOMIZATION - Additional field
  PromoText: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoLink: LinkField;
  PromoText2: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoText3: RichTextField; // DEMO TEAM CUSTOMIZATION - Additional field
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  
  if (props.fields) {
    return (
      <div
        className={`promo promo-top flex flex-col [&>*]:flex gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${sxaStyles}`}>
        {/* Column 1: Image */}
        <div className="image relative flex-1 flex items-stretch max-h-96">
          <Image field={props.fields.PromoIcon} alt={props.fields.PromoText} width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
        {/* Column 2: Text */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div className="p-6 pt-0">
            <div className="text-sm text-blue-600 font-medium p-0">
              <RichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </div>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <RichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <div className="text-gray-600 mb-4 p-0">
              <RichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </div>
            <JssLink
              field={props.fields.PromoLink}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const ImageLeft = (props: PromoProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  if (props.fields) {
    return (
      <div
        className={`promo flex flex-col md:flex-row gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${sxaStyles}`}
      >
        {/* Column 1: Image */}
        <div className="image relative flex-1 flex items-stretch">
          <Image field={props.fields.PromoIcon} alt="Image alt text" width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
        {/* Column 2: Text */}
        <div className="flex flex-col justify-center space-y-6 pr-8 flex-1">
          <div className="p-6">
            <div className="text-sm text-blue-600 font-medium p-0">
              <RichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </div>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <RichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <div className="text-gray-600 mb-4 p-0">
              <RichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </div>
            <div className="relative">
              <JssLink
                field={props.fields.PromoLink}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
              />
              {/* Circle badge - Hidden by default.  Turn on in Sytling settings in Pages. */}
              <span className="seat-counter hidden absolute -top-3 -right-3 items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white text-xs font-bold shadow-md z-10">
                12
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const ImageRight = (props: PromoProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  if (props.fields) {
    return (
      <div
        className={`promo promo-right flex flex-col md:flex-row gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${sxaStyles}`}
      >
        {/* Column 1: Text */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div className="p-6 pt-0">
            <div className="text-sm text-blue-600 font-medium p-0">
              <RichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </div>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <RichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <div className="text-gray-600 mb-4 p-0">
              <RichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </div>
            <JssLink
              field={props.fields.PromoLink}
              className="inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            />
          </div>
        </div>
        {/* Column 2: Image */}
        <div className="image relative flex-1 flex items-stretch">
          <Image field={props.fields.PromoIcon} alt={props.fields.PromoText} width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};