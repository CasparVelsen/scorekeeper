import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Form() {
  return (
    <InputForm>
      <Input title={"Type in your name:"} placeholder={"e.g. Max Mustermann"} />
      <Input title={"Name your game:"} placeholder={"e.g. Siedler von Catan"} />
      <NavLink to="/game">
        <Button isDark={false}>Create game</Button>
      </NavLink>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: -15px;
  width: 100%px;
`;
