import { styled } from "linaria/react";
import { useState } from "react";

const StyledDetailsContainer = styled.section`
  display: flex;
  .decoration {
    padding: 7px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .buble {
      border: 4px solid #a25378;
      border-radius: 50%;
      width: 0.9em;
      height: 0.9em;
    }
    .line {
      flex-grow: 1;
      border: 2px solid #a2537866;
      border-radius: 3px;
      width: 3px;
    }
  }
  .main {
    padding-left: 15px;
    flex-grow: 1;
    min-width: 0;
    h2 {
      margin: 0;
      font-weight: 700;
      line-height: 1.5;
      font-size: 1.2rem;
    }
    h4 {
      margin: 0;
      margin-top: 25px;
    }
    a {
      text-decoration: none;
      color: #0056b3;
      &:hover {
        text-decoration: underline;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .duration {
        color: #aab4c3;
        font-weight: 700;
      }
      .institute {
        display: block;
        color: #58677c;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        text-align: right;
      }
    }
    .skills {
      margin-top: 10px;
      .tech {
        display: inline-block;
      }
    }
  }
`;

export default function SectionDetails({ data }) {
  const id = data.title.replace(/ /g, "-");
  const [hidden, setHidden] = useState(false);
  return (
    <StyledDetailsContainer>
      <div className="decoration">
        <div className="buble"></div>
        <div className="line"></div>
      </div>
      <div className="main" id={id}>
        <div className="header">
          <div>
            <h2>
              <a href={data.link || `#${id}`} target="_blank" rel="noreferrer">
                {data.title}
              </a>
            </h2>
            <span className="duration">{data.duration}</span>
          </div>
          <div>
            <a
              href={data.instituteLink || `#${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="institute"
            >
              {data.institute || ""}
            </a>
            <i className="institute" onClick={() => setHidden(!hidden)}>
              Show {hidden ? "more" : "less"}...
            </i>
          </div>
        </div>
        <div hidden={hidden}>
          <p>{data.summary}</p>
          <h4>Achievements:</h4>
          <ul>
            {data.achievements?.map((item, i) => (
              <li key={id + i}>{item}</li>
            ))}
          </ul>
        </div>
        <h4>Key Skills:</h4>
        <div className="skills">
          {data.skills?.map((skill) => (
            <span key={skill} className="tech">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </StyledDetailsContainer>
  );
}
