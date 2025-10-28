import { Field, ImageField } from '@sitecore-content-sdk/nextjs';

export type BlogDetail = {
  name: Field<string>;
  fields: {
    Title: Field<string>;
    Excerpt: Field<string>;
    PublishDate: Field<string>;
    Image: ImageField;
    Author: Field<string>;
    ReadTime: Field<string>;
    Category: Field<string>;
  };
  url: string;
};
