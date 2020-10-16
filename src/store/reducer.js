import {cities} from "../mocks/cities";
import {offers} from "../mocks/offers";

const initialState = {
  city: cities[3].name,
  offers,
  offerCount: 312,
};


const reducer = (state = initialState) => {
  return state;
};

export {reducer};
