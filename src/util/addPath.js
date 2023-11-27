const addPath = (pathData, setPathData, position) => {
  const newCoordinates = [...pathData.data.geometry.coordinates, position];
  const newPathData = {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: newCoordinates,
      },
    },
  };
  setPathData(newPathData);
};

export default addPath;
