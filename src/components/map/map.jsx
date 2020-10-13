import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.city = [52.38333, 4.9];
    this.zoom = 12;
  }

  componentDidMount() {
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this.city, this.zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
    leaflet
      .marker(this.city, {icon, title: `Amsterdam`})
      .addTo(map);
    offers.forEach(({coordinates, title}) => {
      leaflet
        .marker(coordinates, {icon, title})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" style={{height: `100%`}}/>
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};


export default Map;
