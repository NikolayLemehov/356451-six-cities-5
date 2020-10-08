import PropTypes from "prop-types";
import {PlaceType} from "./const";

const offerPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  smallImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.PRIVATE_ROOM]).isRequired,
  rating: PropTypes.number.isRequired,
  bedroom: PropTypes.number.isRequired,
  visitor: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  option: PropTypes.shape({
    wifi: PropTypes.bool.isRequired,
    heating: PropTypes.bool.isRequired,
    kitchen: PropTypes.bool.isRequired,
    fridge: PropTypes.bool.isRequired,
    washingMachine: PropTypes.bool.isRequired,
    coffeeMachine: PropTypes.bool.isRequired,
    dishMachine: PropTypes.bool.isRequired,
    towels: PropTypes.bool.isRequired,
    babySeat: PropTypes.bool.isRequired,
    cableTV: PropTypes.bool.isRequired,
  }).isRequired,
  isBookMark: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
});

export {offerPropType};
