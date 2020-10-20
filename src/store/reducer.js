import {cities} from "../mocks/cities";
import {offers} from "../mocks/offers";
import {ActionType} from "./action";
import {extend} from "../utils";
import {getCityOffers} from "../core";

const INITIAL_CITY_ORDER = 3;
const initialState = {
  cities,
  offers,
  currentCityName: cities[INITIAL_CITY_ORDER].name,
  currentCityOffers: getCityOffers(offers, cities[INITIAL_CITY_ORDER].name),
  overOffer: cities[0],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_FILTER:
      return extend(state, {
        currentCityName: action.payload,
      });
    case ActionType.GET_CITY_OFFERS:
      const currentOffers = state.offers.filter((it) => it.city === action.payload);
      return extend(state, {
        currentCityOffers: currentOffers,
      });
  }
  return state;
};

export {reducer};
