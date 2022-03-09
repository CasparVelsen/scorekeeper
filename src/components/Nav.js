import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Navigation>
      <LinkStyled to="/">Homepage</LinkStyled>
      <LinkStyled to="/game">Play Game</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Navigation>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;

  &.active {
    background: papayawhip;
    color: salmon;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #666;
  color: white;
  height: 48px;
`;
