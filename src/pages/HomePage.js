import Form from "../components/Form";
import Header from "../components/Header";
import styled, { css } from "styled-components";
import useToggle from "../hooks/useToggle";

export default function HomePage({ onCreateGame }) {
  const [darkMode, toggleDarkMode] = useToggle(false);

  return (
    <>
      <Header children={"Scorekeeper"} />
      <Main darkMode={darkMode}>
        <Title>Start a game:</Title>
        <Form onCreateGame={onCreateGame} />
        <Button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px;
  height: 100vh;
  position: relative;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: #0e79ad;
      color: white;
    `}
`;

const Title = styled.h2`
  color: #666;
  margin: 0;
  font-size: 1.2em;
`;

const Button = styled.button`
  position: absolute;
  bottom: 150px;
  background-color: ${(props) => (props.isDark ? "#666" : "#ddd")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  border: 1px solid rgb(40, 40, 40);
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 1em;
  width: 200px;

  &:hover {
    transition: 0.5s;
    background-color: lightblue;
  }
`;
