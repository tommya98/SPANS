const addPredictPath = (setPathData, position, endPoint) => {
  const newPathData = {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [...position, endPoint],
      },
    },
  };
  setPathData(newPathData);
};

export default addPredictPath;
