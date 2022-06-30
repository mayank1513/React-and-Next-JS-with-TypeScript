import { styled } from "linaria/react";

const StyledAptiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  & > div {
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    background-image: linear-gradient(
      -45deg,
      rgba(128, 66, 255, 0.27058823529411763),
      rgba(128, 66, 47, 0.27058823529411763)
    );
    border-radius: 10px;
    flex-grow: 1;
    p {
      margin: 0;
    }
    ul {
      display: none;
    }
    &:hover {
      ul {
        display: block;
      }
    }
  }
  .title {
    color: rgb(88, 103, 124);
    font-weight: 700;
  }
  .arrow {
    color: rgb(88, 103, 124);
    font-size: 0.775rem;
    font-weight: 500;
    cursor: pointer;
    float: right;
  }
`;

export default function Exams() {
  return (
    <section>
      <h1>Exams & Aptitude</h1>
      <hr />
      <StyledAptiContainer>
        {aptitude.map(({ title, year, highlight, more }) => (
          <div key={title + year}>
            <p>
              <span className="title">{title}</span>
              <span> ({year}) </span>
              <span className="arrow">⛛</span>
            </p>
            <span>{highlight}</span>
            <ul>
              {more.map((item, i) => (
                <li key={title + i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </StyledAptiContainer>
    </section>
  );
}

export const aptitude = [
  {
    title: "IIT-JEE",
    year: "2009",
    highlight: (
      <a href="#" target="_blank">
        Percentile: 98.99
      </a>
    ),
    more: ["All India Rank: 4087 / 3,84,977"],
    date: "Apr 12, 2009",
  },
  {
    title: "GATE",
    year: "2013",
    highlight: (
      <a
        href="https://mayank1513.github.io/assets/images/Gate2013.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Percentile: 97.7
      </a>
    ),
    more: [
      "GATE Score: 548",
      "Marks: 35.67 / 100",
      "All India Rank: 172 / 7497",
    ],
    date: "Jan 20, 2013",
  },
  {
    title: "GATE",
    year: "2016",
    highlight: (
      <a
        href="https://mayank1513.github.io/assets/images/gate2016.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Percentile: 94.63
      </a>
    ),
    more: [
      "GATE Score: 506",
      "Marks: 46.33 / 100",
      "All India Rank: 532 / 9910",
    ],
    date: "Jan 30, 2016",
  },
  {
    title: "GRE",
    year: "Internet Based",
    highlight: (
      <a
        href="https://mayank1513.github.io/assets/images/GRE_Score.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Score: 316
      </a>
    ),
    more: ["Verbal: 152", "Quantitative: 164", "Writing: 3"],
    date: "Dec 18, 2014",
  },
  {
    title: "TOEFL",
    year: "Internet Based",
    highlight: (
      <a
        href="https://mayank1513.github.io/assets/images/ToeflScores.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Score: 106
      </a>
    ),
    more: ["Reading: 27", "Listening: 27", "Speaking: 23", "Writing: 29"],
    date: "Dec 6, 2014",
  },
];
