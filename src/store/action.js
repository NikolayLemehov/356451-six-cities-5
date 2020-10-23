const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_SORTED_CITY_OFFERS: `SET_SORTED_CITY_OFFERS`,
  SET_OVER_OFFER_ID: `SET_OVER_OFFER_ID`,
};

const ActionCreator = {
  changeCityFilter: (cityName) => ({
    type: ActionType.CHANGE_CITY_FILTER,
    payload: cityName,
  }),
  setCityOffers: () => ({
    type: ActionType.SET_CITY_OFFERS,
  }),
  setSortedType: (sortType) => ({
    type: ActionType.SET_SORTED_TYPE,
    payload: sortType,
  }),
  setSortedCityOffers: () => ({
    type: ActionType.SET_SORTED_CITY_OFFERS,
  }),
  setOverOfferId: (offerId) => ({
    type: ActionType.SET_OVER_OFFER_ID,
    payload: offerId,
  }),
};

export {ActionType, ActionCreator};
