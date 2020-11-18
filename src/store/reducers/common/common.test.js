import {common} from "./common";
import {ActionType} from "../../action";
import {cities, CityName, SortingType} from "../../../const";

it(`Reducer common without additional parameters should return initial state`, () => {
  expect(common(void 0, {})).toEqual({
    offers: [],
    nearOffers: [],
    changedBookmarkOffer: {},
    pageOffer: {},
    bookmarkOffers: [],
    authInfo: {},
    cities,
    currentCityName: CityName.PARIS,
    currentSortType: SortingType.POPULAR,
    overOfferId: ``,
    reviews: [],
  });
});

it(`Reducer common should update currentCityName`, () => {
  expect(common({
    currentCityName: CityName.PARIS,
  }, {
    type: ActionType.CHANGE_CITY_FILTER,
    payload: CityName.AMSTERDAM
  })).toEqual({
    currentCityName: CityName.AMSTERDAM
  });
});

it(`Reducer common should update currentSortType`, () => {
  expect(common({
    currentSortType: SortingType.POPULAR,
  }, {
    type: ActionType.SET_SORTED_TYPE,
    payload: SortingType.PRICE_HIGH_TO_LOW
  })).toEqual({
    currentSortType: SortingType.PRICE_HIGH_TO_LOW
  });
});

it(`Reducer common should update overOfferId`, () => {
  expect(common({
    overOfferId: ``,
  }, {
    type: ActionType.SET_OVER_OFFER_ID,
    payload: `2`
  })).toEqual({
    overOfferId: `2`
  });
});

it(`Reducer common should update overOfferId`, () => {
  expect(common({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
  expect(common({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
      {
        id: `4`,
      },
    ],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
});

it(`Reducer common should update changedBookmarkOffer`, () => {
  expect(common({
    changedBookmarkOffer: {},
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFER,
    payload: {
      id: `1`,
    },
  })).toEqual({
    changedBookmarkOffer: {
      id: `1`,
    }
  });

  expect(common({
    changedBookmarkOffer: {
      id: `3`,
    },
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFER,
    payload: {
      id: `1`,
    },
  })).toEqual({
    changedBookmarkOffer: {
      id: `1`,
    }
  });
});

it(`Reducer common should update nearOffers`, () => {
  expect(common({
    nearOffers: [],
  }, {
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    nearOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
  expect(common({
    nearOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
      {
        id: `4`,
      },
    ],
  }, {
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    nearOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
});

it(`Reducer common should update authInfo`, () => {
  expect(common({
    authInfo: {},
  }, {
    type: ActionType.LOAD_AUTH_INFO,
    payload: {id: `2`}
  })).toEqual({
    authInfo: {id: `2`}
  });

  expect(common({
    authInfo: {id: `1`},
  }, {
    type: ActionType.LOAD_AUTH_INFO,
    payload: {id: `2`}
  })).toEqual({
    authInfo: {id: `2`}
  });
});

it(`Reducer common should update offers and changedBookmarkOffer`, () => {
  expect(common({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {},
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
  expect(common({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `3`,
      isBookmark: false,
    },
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
});

it(`Reducer common should update nearOffers and changedBookmarkOffer`, () => {
  expect(common({
    nearOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {},
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },
  })).toEqual({
    nearOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });

  expect(common({
    nearOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `3`,
      isBookmark: false,
    },
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_NEAR_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    nearOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
});

it(`Reducer common should update bookmarkOffers`, () => {
  expect(common({
    bookmarkOffers: [],
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFERS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    bookmarkOffers: [{id: `1`}, {id: `2`}, {id: `3`}]
  });

  expect(common({
    bookmarkOffers: [{id: `1`}, {id: `2`}],
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFERS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    bookmarkOffers: [{id: `1`}, {id: `2`}, {id: `3`}]
  });
});

it(`Reducer common should update reviews`, () => {
  expect(common({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    reviews: [{id: `1`}, {id: `2`}, {id: `3`}]
  });

  expect(common({
    reviews: [{id: `1`}, {id: `2`}],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    reviews: [{id: `1`}, {id: `2`}, {id: `3`}]
  });
});
