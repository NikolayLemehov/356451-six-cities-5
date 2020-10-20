const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
};

const ActionCreator = {
  changeCityFilter: (cityName) => ({
    type: ActionType.CHANGE_CITY_FILTER,
    payload: cityName,
  }),
  getCityOffers: (cityName) => ({
    type: ActionType.GET_CITY_OFFERS,
    payload: cityName,
  }),
};

export {ActionType, ActionCreator};
