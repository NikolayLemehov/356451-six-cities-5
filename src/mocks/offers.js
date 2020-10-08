import {PlaceType} from "../const";
import {nanoid} from "nanoid";

const offers = [
  {
    img: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `01Beautiful & luxurious apartment at great location`,
    description: ``,
    isPremium: true,
    type: PlaceType.APARTMENT,
    rating: 80,
    bedroom: 3,
    visitor: 4,
    price: 120,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: false,
    city: `Amsterdam`,
  },
  {
    img: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `02Wood and stone place`,
    description: ``,
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 80,
    bedroom: 3,
    visitor: 4,
    price: 80,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: true,
    city: `Amsterdam`,
  },
  {
    img: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `03Canal View Prinsengracht`,
    description: ``,
    isPremium: false,
    type: PlaceType.APARTMENT,
    rating: 80,
    bedroom: 3,
    visitor: 4,
    price: 132,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: false,
    city: `Amsterdam`,
  },
  {
    img: [`img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `04Nice, cozy, warm big bed apartment`,
    description: ``,
    isPremium: true,
    type: PlaceType.APARTMENT,
    rating: 100,
    bedroom: 3,
    visitor: 4,
    price: 180,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: false,
    city: `Amsterdam`,
  },
  {
    img: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `05Wood and stone place`,
    description: ``,
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 80,
    bedroom: 3,
    visitor: 4,
    price: 90,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: true,
    city: `Amsterdam`,
  },
  {
    img: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`],
    title: `06Wood and stone place`,
    description: ``,
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 80,
    bedroom: 3,
    visitor: 4,
    price: 110,
    option: {
      wifi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishMachine: true,
      towels: true,
      babySeat: true,
      cableTV: true,
    },
    isBookMark: true,
    city: `Cologne`,
  },
];

offers.forEach((it) => {
  it.id = nanoid();
});

export {offers};