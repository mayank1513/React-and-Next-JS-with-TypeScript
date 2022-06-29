import { styled } from "linaria/react";
import { CollapsibleStickySectionHeader } from "@mayank1513/sticky-section-header";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useState } from "react";

const StyledHeader = styled.div<{ r }>`
  height: 100%;
  background: #80422f;
  display: flex;
  .logo {
    padding: ${({ r }) => r * 5}px;
  }
  img {
    border-radius: ${({ r }) => r * 50}%;
    border: 1px solid green;
    filter: drop-shadow(1px 1px 3px yellowgreen);
    border: ${({ r }) => r - 0.5}px solid #fff5 !important;
    &:hover {
      filter: drop-shadow(2px 1px 5px red);
    }
  }
  .details {
    padding: 15px;
    text-shadow: 1px 1px 3px yellowgreen;
    h1,
    a,
    tr {
      color: white;
      &:hover {
        text-shadow: 1px 1px 5px red;
      }
    }
    td {
      padding: 5px 0;
      &:nth-child(2) {
        padding: 5px 10px;
      }
    }
    h1 {
      margin: 8px 0;
      font-size: 32px;
    }
  }
`;

const minHeight = 90;
const maxHeight = 180;

export default function Header() {
  const [height, setHeight] = useState(maxHeight);
  const [fraction, setFraction] = useState(1);
  const handleHeightChange = (fraction, height) => {
    setFraction(1 - fraction); // 1 when collapsed
    setHeight(height);
  };
  return (
    <CollapsibleStickySectionHeader
      onChangeHeight={handleHeightChange}
      minHeight={minHeight}
      maxHeight={maxHeight}>
      <StyledHeader r={fraction}>
        <div className="logo">
          <Image
            src={logo}
            height={height - fraction * 10}
            width={height - fraction * 10}
          />
        </div>
        <div className="details">
          <h1>Mayank Kumar Chaudhari</h1>
          <table>
            <tbody>
              {[
                "mayank.srmu@gmail.com",
                "mayank.chaudhari.app09@iitbhu.ac.in",
              ].map((mail) => (
                <tr key={mail}>
                  <td>📧</td>
                  <td>
                    <a href={`mailto:${mail}`}>{mail}</a>
                  </td>
                </tr>
              ))}
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
        </div>
      </StyledHeader>
    </CollapsibleStickySectionHeader>
  );
}
