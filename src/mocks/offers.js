import {PlaceType} from "../const";
import {nanoid} from "nanoid";

const offers = [
  {
    img: [`apartment-01.jpg`, `apartment-02.jpg`],
    smallImg: `apartment-small-03.jpg`,
    title: `01Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: true,
    type: PlaceType.APARTMENT,
    rating: 4,
    bedroom: 3,
    visitor: 4,
    price: 120,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: false,
    city: `Amsterdam`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
  {
    img: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`],
    smallImg: `apartment-small-03.jpg`,
    title: `02Wood and stone place`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 4,
    bedroom: 3,
    visitor: 4,
    price: 80,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: true,
    city: `Amsterdam`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
  {
    img: [`apartment-02.jpg`, `apartment-01.jpg`, `apartment-02.jpg`],
    smallImg: `apartment-small-04.jpg`,
    title: `03Canal View Prinsengracht`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: false,
    type: PlaceType.APARTMENT,
    rating: 4,
    bedroom: 3,
    visitor: 4,
    price: 132,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: false,
    city: `Amsterdam`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
  {
    img: [`apartment-03.jpg`, `apartment-01.jpg`, `apartment-02.jpg`],
    smallImg: `apartment-small-03.jpg`,
    title: `04Nice, cozy, warm big bed apartment`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: true,
    type: PlaceType.APARTMENT,
    rating: 5,
    bedroom: 3,
    visitor: 4,
    price: 180,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: false,
    city: `Amsterdam`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
  {
    img: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`],
    smallImg: `room-small.jpg`,
    title: `05Wood and stone place`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 4,
    bedroom: 3,
    visitor: 4,
    price: 90,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: true,
    city: `Amsterdam`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
  {
    img: [`apartment-01.jpg`, `room.jpg`, `apartment-02.jpg`],
    smallImg: `apartment-small-04.jpg`,
    title: `06Wood and stone place`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    isPremium: false,
    type: PlaceType.PRIVATE_ROOM,
    rating: 4,
    bedroom: 3,
    visitor: 4,
    price: 110,
    option: [
      `wifi`,
      `heating`,
      `kitchen`,
      `fridge`,
      `washingMachine`,
      `coffeeMachine`,
      `dishMachine`,
      `towels`,
      `babySeat`,
      `cableTV`,
    ],
    isBookMark: true,
    city: `Cologne`,
    host: `Angelina`,
    hostTop: true,
    avatar: `avatar-angelina.jpg`,
  },
];

offers.forEach((it) => {
  it.id = nanoid();
});

export {offers};
