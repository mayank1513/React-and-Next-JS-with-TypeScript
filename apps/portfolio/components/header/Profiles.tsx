import { styled } from "linaria/react";
import { profiles } from "../../utils";

const StyledProfileContainer = styled.div`
  max-width: 180px;
  height: 100%;
  overflow: auto;
  padding-top: 10px;
  color: white;
  transition: 0.5s all;
  * {
    transition: 0.5s all;
  }
  a {
    color: white;
    text-decoration: none;
  }
  table {
    table-layout: fixed;
    border-collapse: collapse;
    white-space: nowrap;
  }
  td {
    display: inline-flex;
    align-items: center;
    max-width: 150px;
  }
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
    max-width: 150px;
  }
  img {
    height: 18px;
    width: 18px;
  }
  &.collapsed {
    height: 0;
  }
`;

export default function Profiles({ collapsed }) {
  return (
    <StyledProfileContainer className={collapsed ? "collapsed" : ""}>
      <table>
        <tbody>
          {profiles.map(({ icon, link }) => (
            <tr key={link}>
              <td>
                <img src={`/${icon}`} />
              </td>
              <td>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link.replace(/http(s)?:\/\/(www.)?/, "")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledProfileContainer>
  );
}
