import styled from "styled-components";
import { GrEdit } from "react-icons/gr";

export default function Player({
  name,
  score,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
  changeInput,
}) {
  return (
    <PlayerBoard>
      <PlayerName>{name}</PlayerName>
      <Icon onClick={changeInput}>
        <GrEdit size={12} />
      </Icon>
      <Button onClick={onDecreasePlayerScore}>-</Button>
      <PlayerScore>{score}</PlayerScore>
      <Button onClick={onIncreasePlayerScore}>+</Button>
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
  position: relative;
`;

const PlayerName = styled.span`
  margin-right: auto;
`;

const Icon = styled.button`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  background-color: white;
  color: #666;
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -7px;
  left: 70px;

  &: hover {
    background-color: #ddd;
  }
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
