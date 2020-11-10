import {
  changeBookmarkStatusOfferInNearOffers,
  changeBookmarkStatusOfferInOffers,
  loadAuthInfo, loadBookmarkOffers, loadNearOffer, loadBookmarkOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization, loadReviews, setResponseFormStatus,
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus, HttpCode, ResponseType} from "../const";
import {getParsedArray, getParsedAuthInfo, getParsedOffer, getParsedReview} from "../core";
import swal from "sweetalert";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then((response) => {
      const offers = getParsedArray(response.data, getParsedOffer);
      dispatch(loadOffers(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = getParsedAuthInfo(response.data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthInfo(authInfo));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = getParsedAuthInfo(response.data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthInfo(authInfo));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const updateOfferBookmarkStatus = (offerId, bookmarkStatus) => (dispatch, getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${bookmarkStatus ? 1 : 0}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(changeBookmarkStatusOfferInOffers(offer));
      dispatch(changeBookmarkStatusOfferInNearOffers(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const fetchBookmarkOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const bookmarkOffers = getParsedArray(response.data, getParsedOffer);
        dispatch(loadBookmarkOffers(bookmarkOffers));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const fetchIdOffer = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(loadBookmarkOffer(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const fetchNearOffers = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
    .then(({data}) => {
      const offers = getParsedArray(data, getParsedOffer);
      dispatch(loadNearOffer(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const fetchReviews = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${offerId}`)
    .then(({data}) => {
      const reviews = getParsedArray(data, getParsedReview);
      dispatch(loadReviews(reviews));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);

export const uploadReview = ({rating, review: comment, offerId}, onClearFormField) => (dispatch, getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      const reviews = getParsedArray(data, getParsedReview);
      dispatch(loadReviews(reviews));
      dispatch(setResponseFormStatus(false));
      onClearFormField();
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Error`, String(err), `error`);
      return err;
    })
);
