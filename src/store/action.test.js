import {
  ActionType, changeBookmarkStatusOfferInNearOffers, changeBookmarkStatusOfferInOffers,
  changeCityFilter, loadAuthInfo,
  loadBookmarkOffer,
  loadBookmarkOffers,
  loadNearOffer,
  loadOffers, loadReviews, redirectToRoute, requireAuthorization,
  setOverOfferId,
  setSortedType,
} from "./action";


describe(`Action creators work correctly`, () => {
  it(`Action creator work correctly to change the filter by city`, () => {
    expect(changeCityFilter(`City1`)).toEqual({
      type: ActionType.CHANGE_CITY_FILTER,
      payload: `City1`,
    });
  });
  it(`Action creator work correctly to set the sort type`, () => {
    expect(setSortedType(`Sorted type`)).toEqual({
      type: ActionType.SET_SORTED_TYPE,
      payload: `Sorted type`,
    });
  });
  it(`Action creator work correctly for setting an ID covered card`, () => {
    expect(setOverOfferId(`5`)).toEqual({
      type: ActionType.SET_OVER_OFFER_ID,
      payload: `5`,
    });
  });
  it(`Action creator work correctly for loading offers`, () => {
    expect(loadOffers([
      {
        id: `1`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 226,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `City1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
      {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    ]
    )).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [
        {
          id: `1`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 226,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `City1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
        {
          id: `7`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 256,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `city1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
      ]
      ,
    });
  });
  it(`Action creator work correctly for loading offer with a modified bookmark`, () => {
    expect(loadBookmarkOffer({
      id: `7`,
      img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
      smallImg: `small-url`,
      title: `title`,
      description: [`description`],
      isPremium: false,
      type: `Type1`,
      rating: 4.8,
      bedroom: 3,
      visitor: 4,
      price: 256,
      option: [`option1`, `option2`, `option3`, `option4`],
      isBookmark: false,
      city: `city1`,
      cityCoordinates: [48.85661, 2.351499],
      cityZoom: 13,
      host: `hostName`,
      hostTop: false,
      avatar: `avatar_url`,
      coordinates: [48.877610000000004, 2.333499],
    })).toEqual({
      type: ActionType.LOAD_BOOKMARK_OFFER,
      payload: {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    });
  });
  it(`Action creator work correctly for load near offers`, () => {
    expect(loadNearOffer([
      {
        id: `1`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 226,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `City1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
      {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    ])).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: [
        {
          id: `1`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 226,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `City1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
        {
          id: `7`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 256,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `city1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
      ],
    });
  });
  it(`Action creator work correctly for load authorized information`, () => {
    expect(loadAuthInfo({
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      email: `asdf@asdf.com`,
      id: 1,
      isPro: false,
    })).toEqual({
      type: ActionType.LOAD_AUTH_INFO,
      payload: {
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
        email: `asdf@asdf.com`,
        id: 1,
        isPro: false,
      },
    });
  });
  it(`Action creator work correctly for require authorization status`, () => {
    expect(requireAuthorization(`Status`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `Status`,
    });
  });
  it(`Action creator work correctly for redirect route`, () => {
    expect(redirectToRoute(`route`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `route`,
    });
  });
  it(`Action creator work correctly for changing an offer with a corrected bookmark in offers`, () => {
    expect(changeBookmarkStatusOfferInOffers({
      id: `7`,
      img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
      smallImg: `small-url`,
      title: `title`,
      description: [`description`],
      isPremium: false,
      type: `Type1`,
      rating: 4.8,
      bedroom: 3,
      visitor: 4,
      price: 256,
      option: [`option1`, `option2`, `option3`, `option4`],
      isBookmark: false,
      city: `city1`,
      cityCoordinates: [48.85661, 2.351499],
      cityZoom: 13,
      host: `hostName`,
      hostTop: false,
      avatar: `avatar_url`,
      coordinates: [48.877610000000004, 2.333499],
    })).toEqual({
      type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
      payload: {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    });
  });
  it(`Action creator work correctly for changing an offer with a corrected bookmark in near offers`, () => {
    expect(changeBookmarkStatusOfferInNearOffers({
      id: `7`,
      img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
      smallImg: `small-url`,
      title: `title`,
      description: [`description`],
      isPremium: false,
      type: `Type1`,
      rating: 4.8,
      bedroom: 3,
      visitor: 4,
      price: 256,
      option: [`option1`, `option2`, `option3`, `option4`],
      isBookmark: false,
      city: `city1`,
      cityCoordinates: [48.85661, 2.351499],
      cityZoom: 13,
      host: `hostName`,
      hostTop: false,
      avatar: `avatar_url`,
      coordinates: [48.877610000000004, 2.333499],
    })).toEqual({
      type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS,
      payload: {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    });
  });
  it(`Action creator work correctly for loading bookmarked offers`, () => {
    expect(loadBookmarkOffers([
      {
        id: `1`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 226,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `City1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
      {
        id: `7`,
        img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
        smallImg: `small-url`,
        title: `title`,
        description: [`description`],
        isPremium: false,
        type: `Type1`,
        rating: 4.8,
        bedroom: 3,
        visitor: 4,
        price: 256,
        option: [`option1`, `option2`, `option3`, `option4`],
        isBookmark: false,
        city: `city1`,
        cityCoordinates: [48.85661, 2.351499],
        cityZoom: 13,
        host: `hostName`,
        hostTop: false,
        avatar: `avatar_url`,
        coordinates: [48.877610000000004, 2.333499],
      },
    ])).toEqual({
      type: ActionType.LOAD_BOOKMARK_OFFERS,
      payload: [
        {
          id: `1`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 226,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `City1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
        {
          id: `7`,
          img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
          smallImg: `small-url`,
          title: `title`,
          description: [`description`],
          isPremium: false,
          type: `Type1`,
          rating: 4.8,
          bedroom: 3,
          visitor: 4,
          price: 256,
          option: [`option1`, `option2`, `option3`, `option4`],
          isBookmark: false,
          city: `city1`,
          cityCoordinates: [48.85661, 2.351499],
          cityZoom: 13,
          host: `hostName`,
          hostTop: false,
          avatar: `avatar_url`,
          coordinates: [48.877610000000004, 2.333499],
        },
      ],
    });
  });
  it(`Action creator work correctly for loading reviews `, () => {
    expect(loadReviews([
      {
        comment: `comment1`,
        date: `2020-10-10T13:38:44.753Z`,
        id: 1,
        rate: 5,
        user: {
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
          id: 11,
          isPro: false,
          name: `Jack`,
        },
      },
      {
        comment: `comment2`,
        date: `2020-10-11T13:38:44.753Z`,
        id: 2,
        rate: 4,
        user: {
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
          id: 11,
          isPro: false,
          name: `Jack`,
        },
      },
    ])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [
        {
          comment: `comment1`,
          date: `2020-10-10T13:38:44.753Z`,
          id: 1,
          rate: 5,
          user: {
            avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
            id: 11,
            isPro: false,
            name: `Jack`,
          },
        },
        {
          comment: `comment2`,
          date: `2020-10-11T13:38:44.753Z`,
          id: 2,
          rate: 4,
          user: {
            avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
            id: 11,
            isPro: false,
            name: `Jack`,
          },
        },
      ],
    });
  });
});
