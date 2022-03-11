import styled from "styled-components";

export default function Button({ children, isDark }) {
  return <StyledButton isDark={false}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.isDark ? "#666" : "#ddd")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  border: 1px solid rgb(40, 40, 40);
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 1em;
  width: 200px;

  &:hover {
    transition: 0.5s;
    background-color: lightblue;
  }
`;
