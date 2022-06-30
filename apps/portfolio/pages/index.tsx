import { styled } from "linaria/react";
import { css } from "linaria";
import Header from "../components/header";
import Summary from "../components/summary";
import Gist from "components/Gist";
import StickyHeader from "components/common/StickyHeader";
import SectionDetails from "components/common/SectionDetails";
import { data, sections } from "utils/data";
import { useEffect } from "react";

const Container = styled.div`
  background: #80422f44;
  max-width: 820px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 0;
  padding-bottom: 15px;
`;

const myClass = css`
  color: green;
`;

export default function Web() {
  useEffect(() => {
    const elId = location.href.split("#")[1];
    if (!elId) return;
    console.log({ elId });
    document
      .getElementById(elId)
      ?.scrollIntoView({ block: "center", inline: "center" });
    setTimeout(() => {
      window.scrollBy({
        top: -150,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  }, []);
  return (
    <Container>
      <Header />
      <Summary />
      <Gist />
      {sections.map((section) => (
        <div key={section}>
          <StickyHeader>{section}</StickyHeader>
          {data[section].map((data, i) => (
            <SectionDetails key={section + i} data={data} />
          ))}
        </div>
      ))}
    </Container>
  );
}
