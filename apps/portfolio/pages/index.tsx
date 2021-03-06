import { styled } from "linaria/react";
import Header from "../components/header";
import Summary from "../components/summary";
import Gist from "components/Gist";
import StickyHeader from "components/common/StickyHeader";
import SectionDetails from "components/common/SectionDetails";
import { data, sections } from "utils/data";
import { useEffect, useState } from "react";
import Interests from "components/Interests";
import Languages from "components/Languages";
import Exams from "components/Exams";
import Footer from "components/Footer";
import { StickySectionHeader } from "@mayank1513/sticky-section-header";
import Background from "components/Background";

const Container = styled.div`
  background: #80422f44;
  max-width: 850px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 0;
  z-index: 50;
  @media screen and (max-width: 820px) {
    margin: 0;
  }
  @media print {
    min-width: 850px;
    svg {
      fill: black !important;
    }
    section {
      padding: 5px 15px;
    }
    .bg {
      display: none !important;
    }
  }
`;

export default function Home() {
  const [bg, setBg] = useState("");
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
    <>
      <Background bg={bg} />
      <Container>
        <Header />
        <Summary setBg={setBg} />
        <Gist setBg={setBg} />
        {sections.map((section) => (
          <div key={section}>
            <StickyHeader>{section}</StickyHeader>
            {data[section].map((data, i) => (
              <SectionDetails key={section + i} data={data} setBg={setBg} />
            ))}
          </div>
        ))}
        <Exams />
        <StickySectionHeader
          stick={false}
          callBack={(entry) => entry.isIntersecting && setBg("yogi")}
        >
          <Languages />
        </StickySectionHeader>
        <Interests />
        <Footer />
      </Container>
    </>
  );
}
