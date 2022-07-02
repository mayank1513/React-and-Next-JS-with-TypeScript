import { styled } from "linaria/react";
import AzureBadges from "./AzureBadges";
import IqBadge from "./IqBadge";
import { pliq } from "../../utils";
import { StickySectionHeader } from "@mayank1513/sticky-section-header";

const StyledIQBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Summary({ setBg }) {
  return (
    <>
      <section>
        <h1>Career Summary</h1>
        <hr />
        <StickySectionHeader stick={false} callBack={() => setBg("")}>
          <p>
            Dynamic and detail-oriented Software Developer with a knack for
            conceptualizing and delivering elegant, user-friendly solutions
            effectively and efficiently. Enjoy building powerful web
            applications, learning new technologies, and improving overall
            knowledge. A dedicated and persistent person. A team player but do
            not shy away from working as an individual contributor.
          </p>
        </StickySectionHeader>
      </section>
      <StyledIQBadgesContainer>
        {pliq.map((badge, i) => (
          <IqBadge key={`badge ${i}`} {...badge} />
        ))}
      </StyledIQBadgesContainer>
      <br />
      <StyledIQBadgesContainer>
        <AzureBadges />
      </StyledIQBadgesContainer>
    </>
  );
}
