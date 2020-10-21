import {SortingType} from "./const";

export const getCityOffers = (offers, city) => offers.filter((it) => it.city === city);
export const getSortedOffersByType = (offers, sortType) => {
  switch (sortType) {
    case SortingType.POPULAR:
      return offers;
    case SortingType.price.LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortingType.price.HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortingType.RATE:
      return offers.sort((a, b) => a.rating - b.rating);
  }
  return offers;
};

