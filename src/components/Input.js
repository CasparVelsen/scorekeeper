import styled from "styled-components";

export default function Input({
  title,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <InputTitle>{title}</InputTitle>
      <InputTextfield
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      ></InputTextfield>
    </>
  );
}

const InputTitle = styled.label`
  font-family: sans-serif;
  color: grey;
`;

const InputTextfield = styled.input`
  font-family: sans-serif;
  padding: 10px;
  color: rgb(171, 171, 171);
  width: 100%;
`;
