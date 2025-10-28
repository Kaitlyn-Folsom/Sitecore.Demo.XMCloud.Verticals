import React, { JSX, useState } from 'react';
import { User, Heart, ShoppingCart, X } from 'lucide-react';
import { ComponentProps } from '@/lib/component-props';
import { isParamEnabled } from '@/helpers/isParamEnabled';
import { useI18n } from 'next-localization';
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { MiniCart } from '../non-sitecore/MiniCart';
import { LinkField } from '@sitecore-content-sdk/nextjs';
import PreviewSearch from '../search/PreviewSearch';

export type NavigationIconsProps = ComponentProps & {
  fields: {
    CheckoutPage: LinkField;
    AccountPage: LinkField;
    WishlistPage: LinkField;
  };
  params: { [key: string]: string };
};

const IconDropdown = ({
  icon,
  label,
  children,
}: {
  icon: JSX.Element;
  label: string;
} & React.PropsWithChildren) => (
  <Popover>
    <PopoverTrigger
      className="text-foreground hover:text-accent data-[state=open]:text-accent transition-colors"
      aria-label={label}
    >
      {icon}
    </PopoverTrigger>
    <PopoverContent className="flex w-xl flex-col">
      <PopoverClose className="surface-btn !text-foreground shrink-0 self-end">
        <X className="size-4" />
      </PopoverClose>
      <div className="">{children}</div>
    </PopoverContent>
  </Popover>
);

export const Default = (props: NavigationIconsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const showWishlistIcon = !isParamEnabled(props.params.HideWishlistIcon);
  const showAccountIcon = !isParamEnabled(props.params.HideAccountIcon);
  const showCartIcon = !isParamEnabled(props.params.HideCartIcon);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { t } = useI18n();

  return (
    <>
      <div className={`component navigation-icons ${props?.params?.styles?.trimEnd()}`} id={id}>
        <div className="flex items-center gap-3 p-4 lg:gap-5 [.component.header_&]:justify-end [.component.header_&]:px-0">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-700 transition-colors hover:text-blue-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {showAccountIcon && (
            <IconDropdown icon={<User className="size-5" />} label="Account">
              <p>{t('account-empty') || 'You are not logged in.'}</p>
            </IconDropdown>
          )}

          {showWishlistIcon && (
            <IconDropdown icon={<Heart className="size-5" />} label="Wishlist">
              <p>{t('wishlist-empty') || 'Your wishlist is empty.'}</p>
            </IconDropdown>
          )}

          {showCartIcon && (
            <IconDropdown icon={<ShoppingCart className="size-5" />} label="Cart">
              <MiniCart showWishlist={showWishlistIcon} checkoutPage={props.fields?.CheckoutPage} />
            </IconDropdown>
          )}
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-full right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center gap-2">
              <PreviewSearch
                rfkId="formalux_preview_search"
                isOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
              />

              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-3 text-gray-500 transition-colors hover:text-gray-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
