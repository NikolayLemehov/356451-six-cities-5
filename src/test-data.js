// import {upperCaseFirst} from "./utils";

// const currentCityOffers = [
//   {
//     id: `1`,
//     img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
//     smallImg: `small-url`,
//     title: `title`,
//     description: [`description`],
//     isPremium: false,
//     type: upperCaseFirst(`type1`),
//     rating: 4.8,
//     bedroom: 3,
//     visitor: 4,
//     price: 226,
//     option: [`option1`, `option2`, `option3`, `option4`],
//     isBookmark: false,
//     city: `city1`,
//     cityCoordinates: [48.85661, 2.351499],
//     cityZoom: 13,
//     host: `hostName`,
//     hostTop: false,
//     avatar: `avatar_url`,
//     coordinates: [48.877610000000004, 2.333499],
//   },
//   {
//     id: `4`,
//     img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
//     smallImg: `small-url`,
//     title: `title`,
//     description: [`description`],
//     isPremium: false,
//     type: upperCaseFirst(`type1`),
//     rating: 4.8,
//     bedroom: 3,
//     visitor: 4,
//     price: 126,
//     option: [`option1`, `option2`, `option3`, `option4`],
//     isBookmark: false,
//     city: `city1`,
//     cityCoordinates: [48.85661, 2.351499],
//     cityZoom: 13,
//     host: `hostName`,
//     hostTop: false,
//     avatar: `avatar_url`,
//     coordinates: [48.877610000000004, 2.333499],
//   },
//   {
//     id: `7`,
//     img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
//     smallImg: `small-url`,
//     title: `title`,
//     description: [`description`],
//     isPremium: false,
//     type: upperCaseFirst(`type1`),
//     rating: 4.8,
//     bedroom: 3,
//     visitor: 4,
//     price: 256,
//     option: [`option1`, `option2`, `option3`, `option4`],
//     isBookmark: false,
//     city: `city1`,
//     cityCoordinates: [48.85661, 2.351499],
//     cityZoom: 13,
//     host: `hostName`,
//     hostTop: false,
//     avatar: `avatar_url`,
//     coordinates: [48.877610000000004, 2.333499],
//   },
// ];
export const testInitialState = {
  COMMON: {
    offers: [],
    nearOffers: [],
    changedBookmarkOffer: {},
    pageOffer: {},
    bookmarkOffers: [],
    authInfo: {},
    cities: [`City1`, `City2`, `City3`, `City4`, `City5`, `City6`],
    currentCityName: `City1`,
    currentSortType: `Popular`,
    overOfferId: ``,
    reviews: [],
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
  },
};
