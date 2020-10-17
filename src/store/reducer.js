import {cities} from "../mocks/cities";
import {offers} from "../mocks/offers";
import {ActionType} from "./action";
import {extend} from "../utils";
import {getBookmarkOffers} from "../game";

const initialState = {
  cities,
  currentCityOrder: 3,
  cityNames: cities.map((it) => it.name),
  city: cities[3].name,
  offers,
  offerCount: 312,
  bookmarkOffers: getBookmarkOffers(offers),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_BOOKMARK_OFFERS:
      return extend(state, {
        bookmarkOffers: getBookmarkOffers(state.offers),
      });
  }
  return state;
};

export {reducer};
