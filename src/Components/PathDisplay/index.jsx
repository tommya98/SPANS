import { Source, Layer } from "react-map-gl";

const PathDisplay = ({ pathData, predictPathData, unusued }) => {
  const pathLayerStyle = {
    id: "pathLayer",
    type: "line",
    source: "pathData",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#000fff",
      "line-width": 6,
    },
  };

  const predictPathLayerStyle = {
    id: "predictPathLayer",
    type: "line",
    source: "pathData",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#ff0000",
      "line-width": 6,
    },
  };

  return (
    <>
      <Source {...predictPathData}>
        <Layer {...predictPathLayerStyle} />
      </Source>
      <Source {...pathData}>
        <Layer {...pathLayerStyle} />
      </Source>
    </>
  );
};

export default PathDisplay;
