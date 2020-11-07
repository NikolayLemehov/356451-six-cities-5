import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType} from "../core";

const getOffers = (state) => state.COMMON.offers;
const getCurrentCityName = (state) => state.COMMON.currentCityName;
const getCurrentSortType = (state) => state.COMMON.currentSortType;

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
