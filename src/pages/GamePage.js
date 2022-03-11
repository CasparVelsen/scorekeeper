import { useState } from "react";
import Header from "../components/Header";
import Player from "../components/Player";
import styled from "styled-components";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function GamePage() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, id: "1" },
    { name: "Player 2", score: 0, id: "2" },
    { name: "Player 3", score: 0, id: "3" },
    { name: "Player 4", score: 0, id: "4" },
  ]);

  return (
    <>
      <Header children={"Game"} />
      <Main>
        {players.map(({ name, score, id }, index) => (
          <Player
            name={name}
            score={score}
            onDecrement={() => decrementPlayerScore(index)}
            onIncrement={() => incrementPlayerScore(index)}
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

  function incrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  height: auto;
`;
