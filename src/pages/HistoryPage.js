import Header from "../components/Header";
import styled from "styled-components";

export default function HistoryPage() {
  return (
    <>
      <Header children={"History"} />
      <Main>
        <Title>game history:</Title>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  height: auto;
`;

const Title = styled.h2`
  color: #666;
  margin: 0;
  font-size: 1.2em;
`;
