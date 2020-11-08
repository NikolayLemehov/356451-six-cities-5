import {
  changeBookmarkOfferStatus,
  loadAuthInfo, loadBookmarkOffers, loadOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import {getParsedAuthInfo, getParsedOffer, getParsedOffers} from "../core";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(getParsedOffers(data)));
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

export const fetchIdOffer = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(loadOffer(offer));
    })
    .catch(() => {})
);
