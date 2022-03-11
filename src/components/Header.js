import styled from "styled-components";

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  font-size: 2rem;
  background-color: lightblue;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;
