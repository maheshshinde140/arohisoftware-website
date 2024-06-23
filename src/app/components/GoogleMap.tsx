"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

<<<<<<< HEAD
const AnyReactComponent = ({ text }:any) => <div>{text}</div>;
=======
interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ lat, lng, text }) => (
  <div>
    <div>{text}</div>
  </div>
);
>>>>>>> 7d7bfb32a05759734cc9514f1726bfcdb93cc6d2

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Arohi Software" />
      </GoogleMapReact>
    </div>
  );
}
