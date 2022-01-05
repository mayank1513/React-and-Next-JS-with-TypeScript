import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react";

const Btn = styled.div/*css*/`
--bg-color: red;
--shadow-color: #f004;
--color: white;
background: var(--bg-color);
position: relative;
cursor: pointer;
height: 50px;
border-radius: 25px;
display: inline-flex;
align-content: center;
align-items: center;
padding: 0px 30px;
margin: 10px;
box-shadow: 12px 12px 20px 0px var(--shadow-color);
white-space: nowrap;
overflow: hidden;
&, * {
  font-size: 16px;
  font-weight: 700;
  color: var(--color);
}
&:hover {
  box-shadow: none;
}
&:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  opacity: 1;
  transform: translate(-105%, 0);
  background-color: rgba(255, 255, 255, 0.8);
}
&:hover:before {
  opacity: 0;
  transform: translate(0, 0);
}
`

export const Button = ({ children, ...props }: any) => {
  const ref = useRef();
  const [shadowColor, setShadowColor] = useState('');
  useEffect(() => {
    const bgColor = props.style && (props.style['--bg-color'] || (props.style['background'] && !props.style['background'].includes('url')) || props.style['backgroundColor'] || props.style['background-color']);
    if (bgColor && !props.style.hasOwnProperty('--shadow-color')) {
      const bg = window.getComputedStyle(ref.current).backgroundColor.match(/rgba?\((.*)\)/)[1].split(',').map(Number);
      bg[3] = bg[3] ? .3 * bg[3] : .3;
      setShadowColor(`rgba(${bg.join(',')})`);
      console.log(`rgba(${bg.join(',')})`)
    }
  }, [props])
  return <Btn ref={ref} {...props} style={shadowColor.length ? { ...props.style, '--shadow-color': shadowColor } : { ...props.style }}>{children}</Btn>;
};
