export const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_SORTED_CITY_OFFERS: `SET_SORTED_CITY_OFFERS`,
  SET_OVER_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  // CHANGE_BOOKMARK_OFFER_STATUS: `CHANGE_BOOKMARK_OFFER_STATUS`,
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
export const loadAuthInfo = (authInfo) => ({
  type: ActionType.LOAD_AUTH_INFO,
  payload: authInfo,
});
export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
// export const changeBookmarkOfferStatus = (offer) => ({
//   type: ActionType.CHANGE_BOOKMARK_OFFER_STATUS,
//   payload: !offer.isBookmark,
// });
