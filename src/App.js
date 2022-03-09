import Button from "./components/Button";
import Player from "./components/Player";
import Form from "./components/Form";

import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <Main>
      <Form />
      <Player name={"Max Mustermann"} score={"10"} />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
