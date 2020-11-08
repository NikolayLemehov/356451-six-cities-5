import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType} from "../core";

export const getOffers = (state) => state.COMMON.offers;
export const getCurrentOffer = (state) => state.COMMON.currentOffer;
const getCurrentCityName = (state) => state.COMMON.currentCityName;
const getCurrentSortType = (state) => state.COMMON.currentSortType;
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
