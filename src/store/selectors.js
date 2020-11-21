import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType, getSortedReviewsByDate} from "../core";
import {AuthorizationStatus} from "../const";

export const getOffers = (state) => state.COMMON.offers;
export const getNearOffers = (state) => state.COMMON.nearOffers;
export const getChangedBookmarkOffer = (state) => state.COMMON.changedBookmarkOffer;
export const getBookmarkOffers = (state) => state.COMMON.bookmarkOffers;
export const getAuthInfo = (state) => state.COMMON.authInfo;
export const getCities = (state) => state.COMMON.cities;
export const getCurrentCityName = (state) => state.COMMON.currentCityName;
export const getCurrentSortType = (state) => state.COMMON.currentSortType;
export const getReviews = (state) => state.COMMON.reviews;

export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

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

export const getBookmarkOffersByCity = createSelector(
    getBookmarkOffers,
    (bookmarkOffers) => {
      const bookmarkOffersByCityMap = new Map();
      bookmarkOffers.forEach((it) => {
        bookmarkOffersByCityMap.set(it.city, bookmarkOffersByCityMap.has(it.city) ?
          [...bookmarkOffersByCityMap.get(it.city), it] : [it]);
      });
      return bookmarkOffersByCityMap;
    }
);

export const getUserEMail = createSelector(
    getAuthorizationStatus,
    getAuthInfo,
    (authorizationStatus, authInfo) => {
      return authorizationStatus === AuthorizationStatus.AUTH ? authInfo.email : ``;
    }
);

export const getUserAvatar = createSelector(
    getAuthorizationStatus,
    getAuthInfo,
    (authorizationStatus, authInfo) => {
      return authorizationStatus === AuthorizationStatus.AUTH ? authInfo.avatarUrl : ``;
    }
);

export const getIsAuthorizedStatus = createSelector(
    getAuthorizationStatus,
    (authorizationStatus) => {
      return authorizationStatus === AuthorizationStatus.AUTH;
    }
);
