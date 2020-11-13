import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType, getSortedReviewsByDate} from "../core";

export const getOffers = (state) => state.COMMON.offers;
export const getNearOffers = (state) => state.COMMON.nearOffers;
export const getChangedBookmarkOffer = (state) => state.COMMON.changedBookmarkOffer;
export const getCurrentCityName = (state) => state.COMMON.currentCityName;
const getCurrentSortType = (state) => state.COMMON.currentSortType;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getAuthInfo = (state) => state.COMMON.authInfo;
export const getCities = (state) => state.COMMON.cities;
export const getReviews = (state) => state.COMMON.reviews;

export const getCurrentCityOffers = createSelector(
    getOffers,
    getCurrentCityName,
    (offers, currentCityName) => {
      return getCityOffers(offers, currentCityName);
    }
);

export const getCurrentSortedCityOffers = createSelector(
    getCurrentCityOffers,
    getCurrentSortType,
    (currentCityOffers, currentSortType) => {
      return getSortedOffersByType(currentCityOffers, currentSortType);
    }
);

export const getSortedReviews = createSelector(
    getReviews,
    (reviews) => {
      return getSortedReviewsByDate(reviews);
    }
);
