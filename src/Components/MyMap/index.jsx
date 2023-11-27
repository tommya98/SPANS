import Map, { Source, Layer, MapProvider } from "react-map-gl";
import { useEffect, useRef, useState } from "react";
import useInterval from "../../hooks/useInterval";
import addPath from "../../util/addPath";
import moveMap from "../../util/moveMap";
import addPredictPath from "../../util/addPredictPath";
import InfoCard from "../InfoCard";
import PathDisplay from "../PathDisplay";
import MarkerDisplay from "../MarkerDisplay";
import LineChart from "../LineChart";
import LabelCard from "../LabelCard";
import mapData, { deltaX, deltaY } from "../../store/data.js";

const layerStyle = {
  type: "raster",
  source: "myImg",
};

const MyMap = () => {
  const [loading, setLoding] = useState(true);
  const [startPoint, setstartPoint] = useState([
    126.93913203658467, 37.56997969375877,
  ]);
  const [endPoint, setendPoint] = useState([
    126.93697680305937, 37.55519321176797,
  ]);
  const [pathData, setPathData] = useState({
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [[126.93913203658467, 37.56997969375877]],
      },
    },
  });
  const [predictPathData, setPredictPathData] = useState({
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [[126.93913203658467, 37.56997969375877]],
      },
    },
  });
  const [imgData, setImageData] = useState([...mapData.slice(0, 1)]);
  const [speed, setSpeed] = useState([0]);
  const [height, setHeight] = useState([4]);
  const mapRef = useRef(null);

  useEffect(() => {
    const mystartPoint = startPoint;
    const myendPoint = endPoint;
    setstartPoint(mystartPoint);
    setendPoint(myendPoint);
    setLoding(false);
  }, []);

  const BASE_URL = "http://14.35.173.13:14327";
  const [idx, setIndex] = useState(1);

  const handleCount = async () => {
    const response = await fetch(`${BASE_URL}/path-finding`, {
      method: "POST",
      body: JSON.stringify({
        idx: 1,
        startGeo: {
          lat: startPoint[0],
          long: startPoint[1],
        },
        targetGeo: {
          lat: endPoint[0],
          long: endPoint[1],
        },
        currentGeo: {
          lat: startPoint[0],
          long: startPoint[1],
        },
      }),
    });
    const jsonData = await response.json();
    setIndex(idx + 1);
    if (idx === 1) {
      addPredictPath(setPredictPathData, jsonData.path.slice(0, 22), endPoint);
    }
    if (idx <= 22) {
      if (idx % 2 == 0) {
        setImageData(mapData.slice(0, (idx + 2) / 2));
      }
      addPath(pathData, setPathData, [
        jsonData.path[idx][0],
        jsonData.path[idx][1],
      ]);
      setHeight((height) => [
        ...height,
        jsonData.path[idx][2] + 4 + Math.floor(Math.random(0, 1) * idx),
      ]);
      setSpeed([
        ...speed,
        Math.sqrt(
          deltaX * 111195 * 100 * deltaX * 111195 * 100 +
            deltaX * 80000 * 100 * deltaX * 80000 * 100
        ),
      ]);
      moveMap(mapRef.current, [jsonData.path[idx][0], jsonData.path[idx][1]]);
    }
  };

  useEffect(() => {
    if (mapRef.current === null) return;
    setTimeout(() => {
      mapRef.current.moveLayer("predictPathLayer");
      mapRef.current.moveLayer("pathLayer");
    }, 10);
  }, [imgData]);

  useInterval(handleCount, 1000);

  return (
    loading === false && (
      <>
        <MapProvider style={{ position: "relative" }}>
          <Map
            id="mainMap"
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            mapLib={import("mapbox-gl")}
            initialViewState={{
              longitude: startPoint[0],
              latitude: startPoint[1],
              zoom: 16,
              language: "ko",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            {imgData.map((img, index) => {
              return (
                <Source key={index} {...img}>
                  <Layer {...layerStyle} />
                </Source>
              );
            })}
            <PathDisplay
              pathData={pathData}
              predictPathData={predictPathData}
            />
            <MarkerDisplay
              startPoint={startPoint}
              endPoint={endPoint}
              currentPoint={
                pathData.data.geometry.coordinates[
                  pathData.data.geometry.coordinates.length - 1
                ]
              }
              iconColor="yellow"
            />
          </Map>

          <Map
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              border: "1px solid white",
              bottom: "320px",
              right: "0",
            }}
            id="miniMap"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            mapLib={import("mapbox-gl")}
            initialViewState={{
              longitude: startPoint[0],
              latitude: startPoint[1],
              zoom: 11.5,
              language: "ko",
            }}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
          >
            <PathDisplay
              pathData={pathData}
              predictPathData={predictPathData}
            />
            <MarkerDisplay
              startPoint={startPoint}
              endPoint={endPoint}
              currentPoint={
                pathData.data.geometry.coordinates[
                  pathData.data.geometry.coordinates.length - 1
                ]
              }
              iconColor="black"
            />
          </Map>
        </MapProvider>

        <InfoCard
          speed={speed[speed.length - 1]}
          latitude={
            pathData.data.geometry.coordinates[idx < 22 ? idx - 1 : 21][0]
          }
          longitude={
            pathData.data.geometry.coordinates[idx < 22 ? idx - 1 : 21][1]
          }
          altitude={height[idx < 22 ? idx - 1 : 21]}
        />
        <LabelCard />

        <div width="100%" height="100%">
          <LineChart lineData={speed} />
        </div>
      </>
    )
  );
};

export default MyMap;
