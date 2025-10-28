import React, { JSX } from 'react';
import {
  RichText,
  Text,
  Field,
  ImageField,
  RichTextField,
  Image,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin } from "lucide-react"

type AuthorProps = ComponentProps & {
  fields: {
    Author: {
      fields: {
        Name: Field<string>;
        Picture: ImageField;
        Bio: RichTextField
      }
    }
  };
};

const Author = (props: AuthorProps): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Image
                field={props.fields.Author.fields.Picture}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About <Text field={props.fields.Author.fields.Name} /></h3>
                <div className="text-gray-600 mb-4"><RichText field={props.fields.Author.fields.Bio} /></div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const Default = Author;
