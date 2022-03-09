import styled from "styled-components";

export default function Input({ title, placeholder, isDark }) {
  return (
    <>
      <InputTitle>{title}</InputTitle>
      <InputTextfield
        name="nameOfPlayer"
        placeholder={placeholder}
        type="text"
      ></InputTextfield>
    </>
  );
}

const InputTitle = styled.label`
  left: 0;
  font-family: sans-serif;
  color: grey;
`;

const InputTextfield = styled.input`
  font-family: sans-serif;
  padding: 10px;
  color: rgb(171, 171, 171);
  width: 100%;
`;
