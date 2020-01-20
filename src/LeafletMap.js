import React, { useRef, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FeatureLayer } from "esri-leaflet";
import "esri-leaflet-renderers";

export default function LeafletMap() {
  const mapRef = useRef();
  useEffect(() => {
    for (const layerUrl of [
      "https://www.topofthesouthmaps.co.nz/arcgis/rest/services/DataServices/MapServer/11",
      "https://www.topofthesouthmaps.co.nz/arcgis/rest/services/DataServices/MapServer/12",
    ]) {
      const tileLayer = new FeatureLayer({
        url: layerUrl,
      });
      tileLayer.addTo(mapRef.current.leafletElement);
    }
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Map
          ref={mapRef}
          style={{ height: "100%" }}
          viewport={{
            center: [-41.17865397233169, 173.64990234375003],
            zoom: 15,
          }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
      </div>
    </>
  );
}
