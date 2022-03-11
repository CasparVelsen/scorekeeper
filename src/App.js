import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import HistoryPage from "./pages/HistoryPage";

import styled from "styled-components";

import Nav from "./components/Nav";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, id: "1" },
    { name: "Player 2", score: 0, id: "2" },
    { name: "Player 3", score: 0, id: "3" },
    { name: "Player 4", score: 0, id: "4" },
  ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/game"
          element={
            <GamePage
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
