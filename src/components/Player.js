import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <PlayerBoard>
      <PlayerName>{name}</PlayerName>
      <Button onClick={onDecrement}>-</Button>
      <PlayerScore>{score}</PlayerScore>
      <Button onClick={onIncrement}>+</Button>
    </PlayerBoard>
  );
}

const PlayerBoard = styled.section`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  color: #666;
`;

const PlayerName = styled.span`
  margin-right: auto;
`;

const PlayerScore = styled.span`
  margin: 0px 10px;
`;

const Button = styled.button`
  background-color: white;
  color: #666;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding-bottom: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  &: hover {
    background-color: #ddd;
  }
`;
