const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  GET_SORTED_TYPE: `GET_SORTED_TYPE`,
  GET_SORTED_CITY_OFFERS: `GET_SORTED_CITY_OFFERS`,
  GET_OVER_OFFER_ID: `GET_OVER_OFFER_ID`,
};

const ActionCreator = {
  changeCityFilter: (cityName) => ({
    type: ActionType.CHANGE_CITY_FILTER,
    payload: cityName,
  }),
  getCityOffers: () => ({
    type: ActionType.GET_CITY_OFFERS,
  }),
  getSortedType: (sortType) => ({
    type: ActionType.GET_SORTED_TYPE,
    payload: sortType,
  }),
  getSortedCityOffers: () => ({
    type: ActionType.GET_SORTED_CITY_OFFERS,
  }),
  getOverOfferId: (offerId) => ({
    type: ActionType.GET_OVER_OFFER_ID,
    payload: offerId,
  }),
};

export {ActionType, ActionCreator};
