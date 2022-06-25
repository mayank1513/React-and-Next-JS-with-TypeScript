import { styled } from "linaria/react";
import { CollapsibleStickySectionHeader } from "@mayank1513/sticky-section-header";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useState } from "react";

const StyledHeader = styled.div`
  height: 100%;
  background: red;
  img {
    border-radius: ${(props) => `${props.r}%`};
    border: 1px solid green;
  }
`;

const minHeight = 50;
const maxHeight = 150;

export default function Header() {
  const [height, setHeight] = useState(maxHeight);
  const [fraction, setFraction] = useState(1);
  const handleHeightChange = (fraction) => {
    setFraction(fraction);
    setHeight(minHeight + (1 - fraction) * (maxHeight - minHeight));
  };
  return (
    <CollapsibleStickySectionHeader
      onChangeHeight={handleHeightChange}
      minHeight={minHeight}
      maxHeight={maxHeight}>
      <StyledHeader r={fraction * 50}>
        <Image src={logo} height={height} width={height} />
      </StyledHeader>
    </CollapsibleStickySectionHeader>
  );
}
