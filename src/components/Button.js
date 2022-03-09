import styled from "styled-components";

export default function Button({ children, onClick, isDark }) {
  return (
    <StyledButton isDark={true} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.isDark ? "#666" : "#ddd")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  border: 1px solid rgb(40, 40, 40);
  padding: 4px, 12px;
  font-size: 1em;
  width: 50%;
`;
