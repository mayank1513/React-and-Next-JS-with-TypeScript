import styled from "@emotion/styled";

const CSSLogo = styled.div/*css*/ `
  --background: #ebf5fc;

  --yellow: #f9b446;
  --pink: #ea2f98;

  --light-blue: #00cdfc;
  --dark-blue: #007fe8;

  --size: 50px;
  --tr-time: 0.5s;
  margin: 20px 20px 0 0;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: linear-gradient(
    to bottom left,
    var(--dark-blue) 15%,
    var(--light-blue)
  );
  position: relative;
  cursor: pointer;
  transition: all var(--tr-time);

  &::before {
    content: "";
    position: absolute;
    bottom: calc(0.4 * var(--size));
    left: calc(0.4 * var(--size));
    width: var(--size);
    height: var(--size);
    background: linear-gradient(
      to bottom left,
      rgba(249, 180, 70, 1) 15%,
      rgba(234, 47, 152, 0.8)
    );
    border-radius: calc(0.4 * var(--size));
    border: 4px solid var(--background);
    transition: all var(--tr-time);
  }
  &:hover {
    margin: 10px 10px 0 0;
    &:before {
      bottom: -4px;
      left: -5px;
      opacity: 0.5;
      transform: scale(0.6, 0.6) rotate(-315deg);
    }
  }
`;
export function Logo() {
  return <CSSLogo />;
}
