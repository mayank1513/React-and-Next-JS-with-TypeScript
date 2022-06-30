import { styled } from "linaria/react";

const StyledDetailsContainer = styled.section`
  display: flex;
  .decoration {
    padding-top: 7px;
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
    a {
      display: block;
      text-decoration: none;
      font-weight: 700;
      line-height: 1.5;
      font-size: 1.2rem;
      color: #0056b3;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function SectionDetails() {
  return (
    <StyledDetailsContainer>
      <div className="decoration">
        <div className="buble"></div>
        <div className="line"></div>
      </div>
      <div className="main">
        <a href="" target="_blank">
          Investor Pulse
        </a>
        <span></span>
        <div>
          <p>
            Contributed to build an end-to-end solution to power venture
            capitalist’s decision flow by enabling fast and secure collaboration
            and data sharing with stakeholders
          </p>
          <h6>Achievements:</h6>
          <ul>
            <li>
              <span>Clean up tech debts</span>
            </li>
            <li>
              <span>
                Refactor codebase by breaking down large unmaintainable
                components into smaller organised ones
              </span>
            </li>
            <li>
              <span>Build UI at rapid pace</span>
            </li>
            <li>
              <span>
                Converted figma designs to pixel-perfect funcitonal UI
              </span>
            </li>
          </ul>
        </div>
        <h6>Key Skills:</h6>
        <span className="badge badge-info">React</span>
        <span className="badge badge-info">Redux</span>
        <span className="badge badge-info">Redux Saga</span>
        <span className="badge badge-info">Material UI</span>
        <span className="badge badge-info">SCSS</span>
        <span className="badge badge-info">Git</span>
        <span className="badge badge-info">GitHub</span>
        <br />
      </div>
    </StyledDetailsContainer>
  );
}
