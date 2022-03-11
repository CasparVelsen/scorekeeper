import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

export default function Form({ onCreateGame }) {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerNames, setPlayerNames] = useState("");

  const disabled = nameOfGame === "" || playerNames === "";

  return (
    <InputForm
      aria-labelledby="formHeader"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Input
        name="nameOfGame"
        title={"Name your game:"}
        placeholder={"e.g. Siedler von Catan"}
        onChange={(event) => setNameOfGame(event.target.value)}
        value={nameOfGame}
        required
      />
      <Input
        name="playerNames"
        title={"Type in your name:"}
        placeholder={"e.g. Max Mustermann"}
        onChange={(event) => setPlayerNames(event.target.value)}
        value={playerNames}
        required
      />
      <Button disabled={disabled} isDark={false}>
        Create game
      </Button>
    </InputForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
      playerNames: playerNames.split(",").map((name) => name.trim()),
    });
    setNameOfGame("");
    setPlayerNames("");
  }
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: -15px;
  width: 100%px;
`;
