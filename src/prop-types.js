import PropTypes from "prop-types";
// import {PlaceType} from "./const";

export const offerPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  smallImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroom: PropTypes.number.isRequired,
  visitor: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBookmark: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  cityZoom: PropTypes.number.isRequired,
  host: PropTypes.string.isRequired,
  hostTop: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  // reviews: PropTypes.arrayOf(PropTypes.shape({
  //   reviewer: PropTypes.string.isRequired,
  //   avatar: PropTypes.string.isRequired,
  //   rate: PropTypes.number.isRequired,
  //   message: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  // })).isRequired
});

export const citiesPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
}));

