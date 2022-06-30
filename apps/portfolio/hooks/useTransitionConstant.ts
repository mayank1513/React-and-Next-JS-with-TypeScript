import { useEffect, useState } from "react";

export const transitionWidth = 600;

export default function useTransitionConstant() {
  const [c, setC] = useState(1);
  useEffect(() => {
    const onResize = () => {
      // console.log(innerWidth, c);
      setC(innerWidth < transitionWidth ? 2 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return c;
}
