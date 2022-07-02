import { styled } from "linaria/react";
import { profiles } from "../../utils";

const StyledDetails = styled.div`
  padding: 15px;
  text-shadow: 1px 1px 3px yellowgreen;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  td {
    padding: 5px 0;
    &:nth-child(2) {
      padding: 5px 10px;
    }
  }
  h1 {
    filter: drop-shadow(2px 1px 5px greenyellow);
    letter-spacing: 1px;
    margin: 5px 0;
    font-weight: 500;
    font-size: 32px;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    a {
      margin: 0 10px;
    }
  }
  img {
    height: 18px;
    width: 18px;
    filter: drop-shadow(0px 0px 1px greenyellow);
    &:hover {
      filter: drop-shadow(1px 1px 2px red);
    }
  }
  ul {
    display: none;
  }
  &.collapsed {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0 5px;
    h1 {
      margin: 0;
    }
    ul {
      display: flex;
    }
    table {
      display: none;
    }
  }
  @media screen and (max-width: 780px) {
    padding: 0 5px;
    ul {
      display: flex;
    }
  }
  @media screen and (max-width: 600px) {
    align-items: center;
    h1 {
      margin: 0;
    }
    ul {
      justify-content: center;
      padding: 2px;
    }
  }
  @media print {
    text-shadow: none !important;
  }
`;

export default function Details({ collapsed }) {
  return (
    <StyledDetails className={collapsed ? "collapsed" : ""}>
      <h1>Mayank Kumar Chaudhari</h1>
      <table>
        <tbody>
          {["mayank.srmu@gmail.com", "mayank.chaudhari.app09@iitbhu.ac.in"].map(
            (mail) => (
              <tr key={mail}>
                <td>📧</td>
                <td>
                  <a href={`mailto:${mail}`}>{mail}</a>
                </td>
              </tr>
            )
          )}
          <tr>
            <td>🌐</td>
            <td>
              <a href="https://mayank-chaudhari.web.app">
                https://mayank-chaudhari.web.app
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        {profiles.map(({ icon, link }) => (
          <li key={link}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={`/${icon}`} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </StyledDetails>
  );
}
