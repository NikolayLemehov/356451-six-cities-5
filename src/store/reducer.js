import {offers} from "../mocks/offers";
import {cities} from "../mocks/cities";
import {ActionType} from "./action";
import {extend} from "../utils";
import {getCityOffers, getSortedOffersByType} from "../core";
import {SortingType, CityName} from "../const";

const initialState = {
  offers,
  cities,
  currentCityName: CityName.AMSTERDAM,
  currentCityOffers: undefined,
  currentSortedCityOffers: undefined,
  currentSortType: SortingType.POPULAR,
  overOfferId: ``,
};
initialState.currentCityOffers = getCityOffers(offers, initialState.currentCityName);
initialState.currentSortedCityOffers = getSortedOffersByType(initialState.currentCityOffers, SortingType.POPULAR);

const reducer = (state = initialState, action) => {
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
  }
  return state;
};

export {reducer};
