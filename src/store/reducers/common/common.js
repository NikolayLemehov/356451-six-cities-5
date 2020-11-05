import {cities} from "../../../mocks/cities";
import {CityName, SortingType} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {getOffersWithNewOfferByIndex, getSortedOffersByType} from "../../../core";

const initialState = {
  offers: [],
  bookmarkOffers: [],
  authInfo: {},
  cities,
  currentCityName: CityName.PARIS,
  currentCityOffers: undefined,
  currentSortedCityOffers: undefined,
  currentSortType: SortingType.POPULAR,
  overOfferId: ``,
};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_FILTER:
      return extend(state, {
        currentCityName: action.payload,
      });
    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        currentCityOffers: state.offers.filter((it) => it.city === state.currentCityName),
      });
    case ActionType.SET_SORTED_TYPE:
      return extend(state, {
        currentSortType: action.payload,
      });
    case ActionType.SET_SORTED_CITY_OFFERS:
      return extend(state, {
        currentSortedCityOffers: getSortedOffersByType(state.currentCityOffers, state.currentSortType),
      });
    case ActionType.SET_OVER_OFFER_ID:
      return extend(state, {
        overOfferId: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload,
      });
    case ActionType.CHANGE_BOOKMARK_OFFER_STATUS:
      return extend(state, {
        offers: getOffersWithNewOfferByIndex(state.offers, action.payload),
      });
    case ActionType.LOAD_BOOKMARK_OFFERS:
      return extend(state, {
        bookmarkOffers: action.payload,
      });
  }
  return state;
};
