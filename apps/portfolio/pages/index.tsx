import { Button } from "ui";
import { styled } from "linaria/react";
import { css } from "linaria";

const Container = styled.div`
  background: gray;
  margin-top: ${100 / 2}px;
`;

const myClass = css`
  color: green;
`;

export default function Web() {
  return (
    <Container>
      <h1 className={myClass}>Web</h1>
      <Button />
    </Container>
  );
}
