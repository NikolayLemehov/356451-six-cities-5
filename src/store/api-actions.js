import {
  changeBookmarkOfferStatus,
  loadAuthInfo, loadBookmarkOffers,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setCityOffers,
  setSortedCityOffers
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus, SortingType} from "../const";
import {getCityOffers, getParsedAuthInfo, getParsedOffer, getParsedOffers, getSortedOffersByType} from "../core";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = getParsedOffers(data);
      dispatch(loadOffers(offers));
      let currentCommon = getState().COMMON;
      dispatch(setCityOffers(getCityOffers(currentCommon.offers, currentCommon.currentCityName)));
      currentCommon = getState().COMMON;
      dispatch(setSortedCityOffers(getSortedOffersByType(currentCommon.currentCityOffers, SortingType.POPULAR)));
    })
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      const authInfo = getParsedAuthInfo(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadAuthInfo(authInfo));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadAuthInfo({}));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      const authInfo = getParsedAuthInfo(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadAuthInfo(authInfo));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadAuthInfo({}));
    })
);

export const updateOfferBookmarkStatus = (offerId, bookmarkStatus) => (dispatch, getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${bookmarkStatus ? 1 : 0}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(changeBookmarkOfferStatus(offer));
    })
    .then(() => {
      let currentCommon = getState().COMMON;
      dispatch(setCityOffers(getCityOffers(currentCommon.offers, currentCommon.currentCityName)));
      currentCommon = getState().COMMON;
      dispatch(setSortedCityOffers(getSortedOffersByType(currentCommon.currentCityOffers, SortingType.POPULAR)));
    })
    .catch(() => {})
);

export const fetchBookmarkOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      const bookmarkOffers = getParsedOffers(data);
      dispatch(loadBookmarkOffers(bookmarkOffers));
    })
    .catch(() => {})
);
