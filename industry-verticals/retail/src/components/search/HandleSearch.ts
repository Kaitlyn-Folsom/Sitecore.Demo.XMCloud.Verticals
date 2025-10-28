import {
  trackEntityPageViewEvent,
  trackPreviewSearchClickEvent,
  trackSearchClickEntityEvent,
} from '@sitecore-search/react';
import { useRouter } from 'next/navigation';

export type Events =
  | 'PageViewEvent'
  | 'EntityPageView'
  | 'PreviewSearchClickEvent'
  | 'SearchClickEvent'
  | 'PreviewSearchSuggestionClickEvent';

export function handleSearch(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  widgetId: string,
  entityType: string,
  events: Events[],
  entityId: string,
  itemIndex: number
) {
  e.preventDefault();
  events?.forEach((event) => {
    if (event == 'EntityPageView' && entityType && entityId) {
      trackEntityPageViewEvent(entityType, { items: [{ id: entityId }] });
    }

    if (event == 'PreviewSearchClickEvent') {
      trackPreviewSearchClickEvent(widgetId, entityType, {
        index: itemIndex,
        items: [{ id: entityId }],
      });
    }

    if (event == 'SearchClickEvent') {
      trackSearchClickEntityEvent(widgetId, entityType, {
        actionCause: 'entity',
        index: itemIndex,
        items: [{ id: entityId }],
      });
    }

    useRouter().push(href);
  });
}
