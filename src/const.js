export const PlaceType = {
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`,
};

export const OfferCardType = {
  MAIN: `main`,
  NEAR: `near`,
  FAVORITE: `favorite`,
};
export const RATING_COEFFICIENT = 20;
export const CityName = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};
export const cities = [
  CityName.PARIS,
  CityName.COLOGNE,
  CityName.BRUSSELS,
  CityName.AMSTERDAM,
  CityName.HAMBURG,
  CityName.DUSSELDORF,
];
export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  RATE: `Top rated first`,
};
export const sortTypes = [
  SortingType.POPULAR,
  SortingType.PRICE_LOW_TO_HIGH,
  SortingType.PRICE_HIGH_TO_LOW,
  SortingType.RATE,
];
export const AppRoute = {
  MAIN: `/`,
  OFFER: `/offer`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
};
export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
};
export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
export const HttpCode = {
  UNAUTHORIZED: 401
};
export const ResponseType = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};
export const MAX_MESSAGE_COUNT_ON_PAGE = 10;
export const CommentCharacter = {
  MIN: 50,
  MAX: 300,
};
export const offerBookmarkTypeProperty = {
  card: {
    bemBlock: `place-card`,
    width: `18`,
    height: `19`,
  },
  page: {
    bemBlock: `property`,
    width: `31`,
    height: `33`,
  },
};
