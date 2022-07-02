import { styled } from "linaria/react";
import Image from "next/image";
import stars from "/assets/stars.jpg";
import webDev from "/assets/web-dev.gif";
import computerVision1 from "/assets/cv.gif";
import computerVision2 from "/assets/cv1.gif";
import fullStack from "/assets/full-stack.gif";
import mobile from "/assets/mobile.gif";
import research from "/assets/research.jpg";
import prof from "/assets/prof.gif";
import edu from "/assets/edu.jpg";
import yogi from "/assets/yogi.gif";

const StyledBackground = styled.div`
  &,
  .bg {
    position: fixed;
    display: block;
    z-index: -100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .web-dev {
    background: #4f00b1;
    .cover {
      display: none !important;
    }
  }
`;

export default function Background({ bg }) {
  return (
    <StyledBackground>
      {[
        stars,
        webDev,
        computerVision1,
        fullStack,
        computerVision2,
        mobile,
        research,
        prof,
        edu,
        yogi,
      ].map((src) => {
        const cls = src.src.slice(src.src.lastIndexOf("/") + 1).split(".")[0];
        return (
          <div
            key={cls}
            className={`bg ${cls}`}
            style={{ opacity: bg == cls ? 1 : 0 }}
          >
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              className="cover"
            />
            <Image
              src={src}
              layout="fill"
              objectFit="contain"
              className="contain"
            />
          </div>
        );
      })}
    </StyledBackground>
  );
}
