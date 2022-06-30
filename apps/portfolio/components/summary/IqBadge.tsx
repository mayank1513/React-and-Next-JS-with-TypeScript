import { styled } from "linaria/react";

const StyledBadge = styled.a`
  display: inline-block;
  margin: 0.5em;
  border-radius: 10px;
  padding: 8px 15px;
  background: #fff;
  box-shadow: 2px 1px 5px #adff2f;
  text-decoration: none;
  color: #231f20;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 1px 5px red;
  }
  .iq-badge {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .iq {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #26c1fb;
      height: 35px;
      width: 35px;
      color: #fff;
      border-radius: 50%;
      border-bottom-right-radius: 50%;
      border-bottom-right-radius: 0;
      margin: 5px;
      font-weight: 700;
    }
    .label {
      text-align: left;
      text-transform: uppercase;
      color: #26c1fb;
    }
    .small {
      font-weight: 700;
      font-size: 0.6rem;
    }
  }
`;

export default function IqBadge({ tech, iq, date }) {
  return (
    <StyledBadge
      href="https://app.pluralsight.com/profile/mayank-chaudhari-66"
      target="_blank"
    >
      <div className="iq-badge">
        <div className="iq">
          I
          <svg
            data-v-2db1c22b=""
            fill="currentColor"
            viewBox="0 0 67 67"
            width="11"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-2db1c22b=""
              d="m33.5 67c-18.5015391 0-33.5-14.9984609-33.5-33.5s14.9984609-33.5 33.5-33.5 33.5 14.9984609 33.5 33.5v33.5zm0-14c10.7695526 0 19.5-8.7304474 19.5-19.5s-8.7304474-19.5-19.5-19.5-19.5 8.7304474-19.5 19.5 8.7304474 19.5 19.5 19.5z"
            ></path>
          </svg>
        </div>
        <div className="details">
          <div>
            <b className="label">{iq > 200 ? "Expert" : "Proficient"} </b>
            <b>{iq}</b>
          </div>
          <div className="small">VERIFIED: {date}</div>
        </div>
      </div>
      <div className="tech">{tech.join(", ")}</div>
    </StyledBadge>
  );
}
