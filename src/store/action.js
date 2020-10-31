export const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_SORTED_CITY_OFFERS: `SET_SORTED_CITY_OFFERS`,
  SET_OVER_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

export const changeCityFilter = (cityName) => ({
  type: ActionType.CHANGE_CITY_FILTER,
  payload: cityName,
});
export const setCityOffers = () => ({
  type: ActionType.SET_CITY_OFFERS,
});
export const setSortedType = (sortType) => ({
  type: ActionType.SET_SORTED_TYPE,
  payload: sortType,
});
export const setSortedCityOffers = () => ({
  type: ActionType.SET_SORTED_CITY_OFFERS,
});
export const setOverOfferId = (offerId) => ({
  type: ActionType.SET_OVER_OFFER_ID,
  payload: offerId,
});
export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});
