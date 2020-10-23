import {SortingType} from "./const";

export const getCityOffers = (offers, city) => offers.filter((it) => it.city === city);
export const getSortedOffersByType = (offers, sortType) => {
  switch (sortType) {
    case SortingType.POPULAR:
      return offers.slice();
    case SortingType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortingType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortingType.RATE:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
};
