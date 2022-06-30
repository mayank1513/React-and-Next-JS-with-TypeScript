import { StickySectionHeader } from "@mayank1513/sticky-section-header";
import { minHeight } from "components/header";
import { css } from "linaria";

const headerClass = css`
  transition: all 0.5s;
  &[stuck] section {
    margin: 15px 0;
    border-radius: 0;
    padding: 5px;
  }
`;

export default function StickyHeader({ children }) {
  return (
    <StickySectionHeader top={minHeight} {...{ className: headerClass }}>
      <section>
        <h1>{children}</h1>
      </section>
    </StickySectionHeader>
  );
}
