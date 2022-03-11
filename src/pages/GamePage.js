import Header from "../components/Header";
import Player from "../components/Player";
import styled from "styled-components";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function GamePage({
  nameOfGame,
  players,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  return (
    <>
      <Header children={"Game"} />
      <Main>
        <Title>{nameOfGame}</Title>
        {players.map(({ name, score, id }, index) => (
          <Player
            name={name}
            score={score}
            onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
            onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
            key={id}
          />
        ))}
        <NavLink to="/">
          <Button isDark={false}>End game</Button>
        </NavLink>
        <NavLink to="/history">
          <Button isDark={true}>show results</Button>
        </NavLink>
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
  height: auto;
`;

const Title = styled.h2`
  color: #666;
  margin: 0;
  font-size: 1.2em;
`;
