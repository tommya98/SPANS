const moveMap = (map, position) => {
  map.flyTo({ center: position, essential: true, speed: 0.2 });
};

export default moveMap;
