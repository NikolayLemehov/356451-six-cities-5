import {MAX_MESSAGE_COUNT_ON_PAGE, SortingType} from "./const";
import {upperCaseFirst} from "./utils";
import moment from "moment";

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
export const getSortedReviewsByDate = (reviews) => {
  if (reviews.length < 1) {
    return reviews;
  }
  const cloneReviews = reviews.slice();
  cloneReviews.sort((a, b) => moment(b.date).diff(a.date));
  return cloneReviews.slice(0, MAX_MESSAGE_COUNT_ON_PAGE);
};

export const getOffersWithNewOfferByIndex = (offers, offer) => {
  const cloneOffers = offers.slice();
  const index = cloneOffers.findIndex((it) => it.id === offer.id);
  if (index === -1) {
    return offers;
  }
  cloneOffers[index] = offer;
  return cloneOffers;
};

export const getParsedOffer = (data) => {
  return {
    id: String(data[`id`]),
    img: data[`images`],
    smallImg: data[`preview_image`],
    title: data[`title`],
    description: [data[`description`]],
    isPremium: data[`is_premium`],
    type: upperCaseFirst(data[`type`]),
    rating: data[`rating`],
    bedroom: data[`bedrooms`],
    visitor: data[`max_adults`],
    price: data[`price`],
    option: data[`goods`],
    isBookmark: data[`is_favorite`],
    city: data[`city`][`name`],
    cityCoordinates: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
    cityZoom: data[`city`][`location`][`zoom`],
    host: data[`host`][`name`],
    hostTop: data[`host`][`is_pro`],
    avatar: data[`host`][`avatar_url`],
    coordinates: [data[`location`][`latitude`], data[`location`][`longitude`]],
  };
};
export const getParsedAuthInfo = (data) => {
  return {
    id: data[`id`],
    email: data[`email`],
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`],
  };
};
export const getParsedReview = (data) => {
  return {
    id: data[`id`],
    date: data[`date`],
    comment: data[`comment`],
    rate: data[`rating`],
    user: {
      id: data[`user`][`id`],
      avatarUrl: data[`user`][`avatar_url`],
      isPro: data[`user`][`is_pro`],
      name: data[`user`][`name`],
    },
  };
};
export const getParsedArray = (dataArray, getParsedItem) => dataArray.map((it) => getParsedItem(it));
