import { EventType } from '~/lib/enums';

import beer from '~/assets/img/beer-icon.png';
import cocktail from '~/assets/img/cocktail-icon.png';
import coffee from '~/assets/img/coffee-icon.png';
import milkshake from '~/assets/img/milkshake-icon.png';

export function useIcon(type: EventType) {
  let icon;
  switch (type) {
    case EventType.Cocktails:
      icon = cocktail;
      break;
    case EventType.Coffees:
      icon = coffee;
      break;
    case EventType.Milkshakes:
      icon = milkshake;
      break;
    default:
    case EventType.Beers:
      icon = beer;
      break;
  }
  return icon;
}
