import { styled } from "linaria/react";
import { extraProfiles, profiles } from "utils";

const StyledFooter = styled.footer`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
    180deg,
    rgba(128, 66, 47, 0.3333333333333333),
    rgba(160, 242, 95, 0.7725490196078432)
  );
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    a {
      margin: 0 7px;
    }
    img {
      height: 18px;
      width: 18px;
      filter: drop-shadow(0px 0px 1px greenyellow);
      &:hover {
        filter: drop-shadow(1px 1px 2px red);
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Mayank Kumar Chaudhari
      <ul>
        {[...profiles, ...extraProfiles].map(({ icon, link }) => (
          <li key={link}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={`/${icon}`} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
}
