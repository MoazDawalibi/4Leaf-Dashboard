import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Input, Button } from "antd";
import { useFormikContext } from "formik";
import { ReSellerInitialValues } from "../../../../types/ReSeller";
import { useTranslation } from "react-i18next";

// Fix for marker icon issue
//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

const LocationMarker: React.FC = () => {
  const { setFieldValue } = useFormikContext<ReSellerInitialValues>();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setFieldValue("lat", lat); // Update latitude in Formik
      setFieldValue("lng", lng); // Update longitude in Formik
    },
  });

  return null;
};

const CenterMapOnPosition: React.FC<{ position: [number, number] }> = ({
  position,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);

  return null;
};

const MyMap: React.FC = () => {
  const [showMap, setShowMap] = useState(false); // State to control map visibility
  const [currentPosition] = useState<[number, number] | null>(null); // State to hold current position
  const { values } = useFormikContext<ReSellerInitialValues>();
  const { lat, lng } = values as any;
  const position: [number, number] = [lat, lng];

  const [t] = useTranslation();
  return (
    <div className="mb-4">
      <div className="MapInputs ">
        <Button
          className="mb-4"
          onClick={() => setShowMap(!showMap)}
          type="primary"
        >
          {showMap
            ? `${t("practical.Hide")} ${t("practical.Map")}`
            : `${t("practical.Show")} ${t("practical.Map")}`}
        </Button>
      </div>

      {showMap && (
        <MapContainer
          center={currentPosition || position} // Use currentPosition if available, otherwise fallback to form values
          zoom={13}
          style={{ height: "200px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={currentPosition || position}></Marker>
          <LocationMarker />
          <CenterMapOnPosition position={currentPosition || position} />
        </MapContainer>
      )}
    </div>
  );
};

export default MyMap;
