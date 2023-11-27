import { Marker } from "react-map-gl";

const MarkerDisplay = ({ startPoint, endPoint, currentPoint, iconColor }) => {
  return (
    <>
      <Marker longitude={startPoint[0]} latitude={startPoint[1]} color="blue" />
      <Marker longitude={endPoint[0]} latitude={endPoint[1]} color="red" />
      <Marker longitude={currentPoint[0]} latitude={currentPoint[1]}>
        {iconColor === "yellow" && (
          <img width="28px" height="28px" src="./drone.svg" />
        )}
        {iconColor === "black" && (
          <img width="28px" height="28px" src="./drone2.svg" />
        )}
      </Marker>
    </>
  );
};

export default MarkerDisplay;
