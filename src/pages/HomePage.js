import Player from "../components/Player";
import Form from "../components/Form";
import Header from "../components/Header";

import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Header children={"Homepage"} />
      <Main>
        <Form />
        <Player name={"Max Mustermann"} score={"10"} />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;
