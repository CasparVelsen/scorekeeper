import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

export default function Form() {
  return (
    <InputForm>
      <Input title={"Type in your name:"} placeholder={"e.g. Max Mustermann"} />
      <Input title={"Name your game:"} placeholder={"e.g. Siedler von Catan"} />
      <Button>Submit</Button>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid rgb(214, 214, 214);
  padding: 10px;
  width: 80vw;
  background-color: #ddd;
`;
