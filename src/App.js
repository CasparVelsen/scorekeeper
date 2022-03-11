import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import HistoryPage from "./pages/HistoryPage";

import styled from "styled-components";

import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer>
        <Nav />
      </Footer>
    </>
  );
}

export default App;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
