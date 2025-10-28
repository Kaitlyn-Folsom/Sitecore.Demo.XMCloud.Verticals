import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props';
import SearchResultsWidget from './SearchResultsComponent';

export type SearchResultsProps = ComponentProps & {
  params: { [key: string]: string };
}

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  const rfkId = props.params['RFKID'];

  if (rfkId === "") {
    return (
      <div className={`${sxaStyles}`}>
        RFK ID is not set.
      </div>
    )
  }

  return (
    <div className={`${sxaStyles}`}>
      <SearchResultsWidget rfkId={rfkId} />
    </div>
  )
}

export const Default = SearchResults;
