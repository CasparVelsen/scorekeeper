import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import HistoryPage from "./pages/HistoryPage";
import { nanoid } from "nanoid";
import styled from "styled-components";

import Nav from "./components/Nav";

function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onCreateGame={createGame} />} />
        <Route
          path="/game"
          element={
            <GamePage
              nameOfGame={nameOfGame}
              players={players}
              onDecreasePlayerScore={decreasePlayerScore}
              onIncreasePlayerScore={increasePlayerScore}
            />
          }
        />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer>
        <Nav />
      </Footer>
    </>
  );

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame);
    setPlayers(playerNames.map((name) => ({ name, score: 0, id: nanoid() })));
    navigate("/game");
  }

  function increasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}

export default App;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
