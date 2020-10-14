import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {cityOption} from "../../mocks/cities";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.city = props.city;
    this.cityCoordinates = cityOption[this.city.toLowerCase()].coordinates;
    this.zoom = 12;
  }

  componentDidMount() {
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: this.cityCoordinates,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this.cityCoordinates, this.zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
    offers.forEach(({coordinates, title}) => {
      leaflet
        .marker(coordinates, {icon, title})
        .addTo(map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  city: PropTypes.string.isRequired,
};


export default Map;
