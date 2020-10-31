import {loadOffers, setCityOffers, setSortedCityOffers} from "./action";
import {APIRoute, SortingType} from "../const";
import {getCityOffers, getParsedOffers, getSortedOffersByType} from "../core";

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
