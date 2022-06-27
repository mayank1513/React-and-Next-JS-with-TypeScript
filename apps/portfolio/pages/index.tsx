import { Button } from "ui";
import { styled } from "linaria/react";
import { css } from "linaria";
import Header from "../components/Header";

const Container = styled.div`
  background: gray;
  margin-top: ${100 / 2}px;
  max-width: 850px;
  padding-top: 40px;
  margin: auto;
`;

const myClass = css`
  color: green;
`;

export default function Web() {
  return (
    <Container>
      <Header />
      {[...Array(50).keys()].map((i) => (
        <li key={i}>{i}</li>
      ))}
    </Container>
  );
}
