import {cities} from "../../../const";
import {CityName, SortingType} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {getOffersWithNewOfferByIndex} from "../../../core";

const initialState = {
  offers: [],
  nearOffers: [],
  changedBookmarkOffer: {},
  pageOffer: {},
  bookmarkOffers: [],
  authInfo: {},
  cities,
  currentCityName: CityName.PARIS,
  currentSortType: SortingType.POPULAR,
  overOfferId: ``,
  reviews: [],
};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_FILTER:
      return extend(state, {
        currentCityName: action.payload,
      });
    case ActionType.SET_SORTED_TYPE:
      return extend(state, {
        currentSortType: action.payload,
      });
    case ActionType.SET_OVER_OFFER_ID:
      return extend(state, {
        overOfferId: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_BOOKMARK_OFFER:
      return extend(state, {
        changedBookmarkOffer: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.LOAD_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload,
      });
    case ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS:
      return extend(state, {
        offers: getOffersWithNewOfferByIndex(state.offers, action.payload),
        changedBookmarkOffer: action.payload,
      });
    case ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS:
      return extend(state, {
        nearOffers: getOffersWithNewOfferByIndex(state.nearOffers, action.payload),
        changedBookmarkOffer: action.payload,
      });
    case ActionType.LOAD_BOOKMARK_OFFERS:
      return extend(state, {
        bookmarkOffers: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_PAGE_OFFER:
      return extend(state, {
        pageOffer: action.payload,
      });
  }
  return state;
};
