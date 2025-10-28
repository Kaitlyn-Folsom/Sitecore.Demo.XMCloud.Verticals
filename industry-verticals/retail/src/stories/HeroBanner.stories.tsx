import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Default as HeroBanner, TopContent } from '../components/hero-banner/HeroBanner';
import { CommonParams, CommonRendering } from './common/commonData';
import { boolToSitecoreCheckbox } from './helpers/boolToSitecoreCheckbox';
import { renderStorybookPlaceholder } from './helpers/renderStorybookPlaceholder';
import { createLinkField, createRichTextField, createTextField } from './helpers/createFields';

type StoryProps = ComponentProps<typeof HeroBanner> & {
  hideAccentLine?: boolean;
  withPlaceholder?: boolean;
  reverseLayout?: boolean;
  withoutGradientOverlay?: boolean;
};

const meta = {
  title: 'Page Content/Hero Banner',
  component: HeroBanner,
  tags: ['autodocs'],
  argTypes: {
    hideAccentLine: {
      name: 'Hide Accent Line',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    withoutGradientOverlay: {
      name: 'Without Gradient Overlay',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    reverseLayout: {
      name: 'Reverse Layout',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    withPlaceholder: {
      name: 'With Placeholder',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  args: {
    hideAccentLine: false,
    withoutGradientOverlay: false,
    reverseLayout: false,
    withPlaceholder: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<StoryProps>;
export default meta;

type Story = StoryObj<StoryProps>;

const baseParams = {
  ...CommonParams,
};

const baseRendering = {
  ...CommonRendering,
  componentName: 'Hero Banner',
  params: baseParams,
  placeholders: {
    [`hero-banner-search-bar-${baseParams.DynamicPlaceholderId}`]: [renderStorybookPlaceholder()],
  },
};

// Mock fields for the HeroBanner component
const createHeroBannerFields = () => ({
  Image: {
    value: {
      src: 'https://placehold.co/1920x1080/CCCCCC/FFFFFF?text=Hero+Img',
      alt: 'Hero Banner Image',
      width: 1920,
      height: 1080,
    },
  },
  Video: {
    value: {},
  },
  Title: createTextField('Discover Design That Speaks to You'),
  Description: createRichTextField(1),
  CtaLink: createLinkField("See what's new"),
});

export const Default: Story = {
  render: (args) => {
    const params = {
      ...baseParams,
      HideAccentLine: boolToSitecoreCheckbox(args.hideAccentLine),
      WithPlaceholder: boolToSitecoreCheckbox(args.withPlaceholder),
      ReverseLayout: boolToSitecoreCheckbox(args.reverseLayout),
      WithoutGradientOverlay: boolToSitecoreCheckbox(args.withoutGradientOverlay),
    };

    const fields = createHeroBannerFields();

    return <HeroBanner params={params} rendering={baseRendering} fields={fields} />;
  },
};

export const WithTopContent: Story = {
  render: (args) => {
    const params = {
      ...baseParams,
      HideAccentLine: boolToSitecoreCheckbox(args.hideAccentLine),
      WithPlaceholder: boolToSitecoreCheckbox(args.withPlaceholder),
      ReverseLayout: boolToSitecoreCheckbox(args.reverseLayout),
      WithoutGradientOverlay: boolToSitecoreCheckbox(args.withoutGradientOverlay),
    };

    const fields = createHeroBannerFields();

    return <TopContent params={params} rendering={baseRendering} fields={fields} />;
  },
};
