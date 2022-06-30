import { StickySectionHeader } from "@mayank1513/sticky-section-header";
import { minHeight } from "components/header";
import useTransitionConstant from "hooks/useTransitionConstant";
import { css } from "linaria";

const headerClass = css`
  &[stuck] section {
    margin: 15px 0;
    border-radius: 0;
    padding: 3px;
    h1 {
      font-size: 1em;
    }
  }
`;

export default function StickyHeader({ children }) {
  const c = useTransitionConstant();
  return (
    <StickySectionHeader
      key={c}
      top={c * minHeight}
      {...{ className: headerClass }}
    >
      <section>
        <h1>{children}</h1>
      </section>
    </StickySectionHeader>
  );
}
