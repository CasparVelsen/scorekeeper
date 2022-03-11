import Form from "../components/Form";
import Header from "../components/Header";
import styled from "styled-components";

export default function HomePage({ onCreateGame }) {
  return (
    <>
      <Header children={"Scorekeeper"} />
      <Main>
        <Title>Start a game:</Title>
        <Form onCreateGame={onCreateGame} />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px;
  height: auto;
`;

const Title = styled.h2`
  color: #666;
  margin: 0;
  font-size: 1.2em;
`;
