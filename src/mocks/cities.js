import {CityName} from "../const";

const cities = [
  {
    name: CityName.PARIS,
    coordinates: [52.38333, 4.9],
  },
  {
    name: CityName.COLOGNE,
    coordinates: [52.38333, 4.9],
  },
  {
    name: CityName.BRUSSELS,
    coordinates: [52.38333, 4.9],
  },
  {
    name: CityName.AMSTERDAM,
    coordinates: [52.38333, 4.9],
  },
  {
    name: CityName.HAMBURG,
    coordinates: [52.38333, 4.9],
  },
  {
    name: CityName.DUSSELDORF,
    coordinates: [52.38333, 4.9],
  },
];
// const cityOption = cities.reduce((acc, {name, coordinates}) => {
//   acc[name.toLowerCase()] = {
//     name,
//     coordinates,
//   };
//   return acc;
// }, {});

export {cities};
