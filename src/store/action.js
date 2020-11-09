export const ActionType = {
  CHANGE_CITY_FILTER: `CHANGE_CITY_FILTER`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_OVER_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_BOOKMARK_OFFER: `LOAD_BOOKMARK_OFFER`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS`,
  LOAD_BOOKMARK_OFFERS: `LOAD_BOOKMARK_OFFERS`,
};

export const changeCityFilter = (cityName) => ({
  type: ActionType.CHANGE_CITY_FILTER,
  payload: cityName,
});
export const setSortedType = (sortType) => ({
  type: ActionType.SET_SORTED_TYPE,
  payload: sortType,
});
export const setOverOfferId = (offerId) => ({
  type: ActionType.SET_OVER_OFFER_ID,
  payload: offerId,
});
export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});
export const loadBookmarkOffer = (offer) => ({
  type: ActionType.LOAD_BOOKMARK_OFFER,
  payload: offer,
});
export const loadNearOffer = (offers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
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
export const changeBookmarkStatusOfferInOffers = (offer) => ({
  type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
  payload: offer,
});
export const changeBookmarkStatusOfferInNearOffers = (offer) => ({
  type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS,
  payload: offer,
});
export const loadBookmarkOffers = (offers) => ({
  type: ActionType.LOAD_BOOKMARK_OFFERS,
  payload: offers,
});
