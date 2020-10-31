import {
  loadAuthInfo,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setCityOffers,
  setSortedCityOffers
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus, SortingType} from "../const";
import {getCityOffers, getParsedAuthInfo, getParsedOffers, getSortedOffersByType} from "../core";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = getParsedOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(setCityOffers(getCityOffers(currentState.offers, currentState.currentCityName)));
      currentState = getState();
      dispatch(setSortedCityOffers(getSortedOffersByType(currentState.currentCityOffers, SortingType.POPULAR)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      const authInfo = getParsedAuthInfo(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadAuthInfo(authInfo));
    })
    .catch((err) => {
      throw err;
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
);
