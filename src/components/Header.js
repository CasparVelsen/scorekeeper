import styled from "styled-components";

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  background-color: #666;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
