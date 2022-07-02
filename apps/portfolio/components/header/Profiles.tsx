import { styled } from "linaria/react";
import { profiles } from "../../utils";

const StyledProfileContainer = styled.div`
  max-width: 180px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 10px;
  color: white;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fff5;
    outline: 1px solid #5555;
    border-radius: 2px;
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
  @media screen and (max-width: 780px) {
    display: none;
  }
  @media print {
    overflow: hidden;
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
