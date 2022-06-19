import styled from "@emotion/styled";
import { Button, Logo } from ".";
import { useRef, useState, useEffect } from "react";

const HeaderContainer = styled.div/*css*/ `
  // background: #87ceeb15;
  max-width: 100vw;
  header {
    margin: auto;
    align-items: center;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    line-height: 1.5;
  }
`;

const FixedHeader = styled.div/*css */ `
  max-width: 100vw;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  transition: all 0.5s;
`;

export interface HeaderProps {
  title: string;
  ref?: any;
}

function BaseHeader({ title, ref }: HeaderProps) {
  return (
    <HeaderContainer ref={ref}>
      <header>
        <Logo></Logo>
        <h1>{title}</h1>
        <Button style={{ "--bg-color": "blue" }}>Contact Us</Button>
      </header>
    </HeaderContainer>
  );
}

export function Header(props: HeaderProps) {
  const ref = useRef();
  const [headerFixed, setHeaderFixe] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const observer = new IntersectionObserver(
      (entries) => {
        setHeaderFixe(entries[0].boundingClientRect.bottom < 0);
      },
      { root: null, rootMargin: "0px", threshold: [0, 0.5, 0.8, 1] }
    );
    console.log(ref.current);
    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <BaseHeader {...props} />
      </div>
      <FixedHeader
        className="full"
        style={headerFixed ? {} : { transform: "translate(0, -100%)" }}
      >
        <BaseHeader {...props} />
      </FixedHeader>
    </>
  );
}
