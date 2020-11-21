import PropTypes from "prop-types";

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
});

export const reviewPropType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })
});

