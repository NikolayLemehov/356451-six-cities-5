import {PlaceType} from "../const";

const offers = [
  {
    id: `01-AiBFYnZhAPVxgj6c8jmTp`,
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      },
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      },
    ],
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: `02-oz7zeOXFl1dNgsSr60r3f`,
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      }
    ],
    coordinates: [52.369553943508, 4.85309666406198],
  },
  {
    id: `03-rEgx598pJmxUgHaqEALKj`,
    img: [`apartment-02.jpg`, `apartment-01.jpg`, `room.jpg`],
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      }
    ],
    coordinates: [52.3909553943508, 4.929309666406198],
  },
  {
    id: `04-OpnK6w_5Cy3CSrWeO8XNl`,
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      }
    ],
    coordinates: [52.3809553943508, 4.939309666406198],
  },
  {
    id: `05-U5zCWGoobLGmghMb9YP4W`,
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      }
    ],
    coordinates: [52.3739553943508, 4.909309666406198],
  },
  {
    id: `06-BuiwU2MQYV06aPYkBIe2w`,
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
    reviews: [
      {
        reviewer: `Max`,
        avatar: `avatar-max.jpg`,
        rate: 4,
        message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      }
    ],
    coordinates: [52.3739553943508, 4.909309666406198],
  },
];

export {offers};
