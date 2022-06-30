import { styled } from "linaria/react";
import { css } from "linaria";
import Header from "../components/header";
import Summary from "../components/summary";
import Gist from "components/Gist";
import StickyHeader from "components/common/StickyHeader";
import SectionDetails from "components/common/SectionDetails";

const Container = styled.div`
  background: #80422f44;
  margin-top: ${100 / 2}px;
  max-width: 850px;
  margin: auto;
  margin-top: 40px;
`;

const myClass = css`
  color: green;
`;

export default function Web() {
  return (
    <Container>
      <Header />
      <Summary />
      <Gist />
      <div>
        <StickyHeader>Key Projects</StickyHeader>
        <SectionDetails />
      </div>

      {[...Array(50).keys()].map((i) => (
        <li key={i}>{i}</li>
      ))}
    </Container>
  );
}
