import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import AppTitle from "./Components/AppTitle";

import MyMap from "./Components/MyMap";
import "./App.css";

function App() {
  return (
    <Container>
      <AppTitle />
      <MyMap />
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  h1 {
    font-size: 3rem;
    text-align: center;
    color: black;
    font-weight: 900;
    margin-top: 2rem;
  }

  .mapboxgl-map {
    margin: auto;
  }
`;

export default App;
