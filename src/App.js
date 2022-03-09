import Input from "./components/Input";
import Button from "./components/Button";
import Player from "./components/Player";

import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <Main>
      <Input
        title={"Type in your name:"}
        placeholder={"e.g. Max Mustermann"}
        isDark={false}
      />
      <Input
        title={"Name your game:"}
        placeholder={"e.g. Siedler von Catan"}
        isDark={true}
      />
      <div>
        <Button children={"start Game"} isDark={false} />
        <Button children={"History"} isDark={true} />
      </div>
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
