import { styled } from "linaria/react";
import { css } from "linaria";
import { CollapsibleStickySectionHeader } from "@mayank1513/sticky-section-header";
import Image from "next/image";
import logo from "/public/logo.png";
import { useState } from "react";
import Details from "./Details";
import Profiles from "./Profiles";
import useTransitionConstant, {
  transitionWidth,
} from "hooks/useTransitionConstant";

const headerClass = css`
  z-index: 100;
  transition: all 0.5s, height 0s;
  @media print {
    position: relative !important;
  }
`;

export const minHeight = 90;
const maxHeight = 180;

const StyledHeader = styled.div<{ r }>`
  height: 100%;
  background: #80422f;
  display: flex;
  .logo {
    padding: ${({ r }) => r * 5}px;
    img {
      transition: all 0s;
      border-radius: ${({ r }) => r * 50}%;
      border: 1px solid green;
      filter: drop-shadow(1px 1px 3px yellowgreen);
      border: ${({ r }) => r - 0.5}px solid #fff5 !important;
      &:hover {
        filter: drop-shadow(2px 1px 5px red);
      }
    }
  }
  h1,
  a,
  tr {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      filter: drop-shadow(1px 1px 3px red);
    }
  }
  a {
    &:hover {
      text-decoration: underline;
      letter-spacing: 0.5px;
    }
  }
  @media screen and (max-width: ${transitionWidth}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Header() {
  const [height, setHeight] = useState(maxHeight);
  const [fraction, setFraction] = useState(1);
  const c = useTransitionConstant();
  const handleHeightChange = (fraction, height) => {
    setFraction(1 - fraction); // 1 when collapsed
    setHeight(height / c);
  };
  return (
    <CollapsibleStickySectionHeader
      key={c}
      onChangeHeight={handleHeightChange}
      minHeight={c * minHeight}
      maxHeight={c * maxHeight}
      {...{ className: headerClass }}
    >
      <StyledHeader r={fraction}>
        <div className="logo">
          <img
            src="/logo.png"
            height={height - fraction * 10}
            width={height - fraction * 10}
          />
        </div>
        <Details collapsed={height <= 120} />
        <Profiles collapsed={height <= 120} />
      </StyledHeader>
    </CollapsibleStickySectionHeader>
  );
}
