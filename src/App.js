import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 5.603717,
          lng: -0.186964,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apikey: process.env.REACT_APP_MAP_API_KEY,
})(MapContainer);
