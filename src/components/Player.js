import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <PlayerBoard>
      <PlayerName>{name}</PlayerName>
      <button onClick={onDecrement}>-</button>
      <PlayerScore>{score}</PlayerScore>
      <button onClick={onIncrement}>+</button>
    </PlayerBoard>
  );
}

const PlayerBoard = styled.section`
  display: flex;
  justify-content: right;
  width: 80vw;
  border: 1px solid rgb(40, 40, 40);
  padding: 20px;
`;

const PlayerName = styled.span`
  margin-right: auto;
`;

const PlayerScore = styled.span`
  margin: 0px 10px;
`;
