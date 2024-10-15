"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = { lat: 51.7673275642516, lng: 19.47788658192281 };

      // MARKER
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const mapOptions = {
        center: position,
        zoom: 15,
        mapId: "NEXT_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);

      // add the marker in the map
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return <div className="h-full" ref={mapRef} />;
};

export default GoogleMap;
