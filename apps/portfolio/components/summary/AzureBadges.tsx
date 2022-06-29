import Image from "next/image";
import azAdmin from "/assets/azure-administrator-associate-600x600.png";
import azAi from "/assets/azure-ai-engineer-600x600.png";
import azSecurity from "/assets/security-compliance-and-identity-fundamentals-600x600.png";
import { styled } from "linaria/react";

const AzBadgeContainer = styled.a`
  margin: 0 20px;
  padding: 10px;
  filter: drop-shadow(2px 1px 5px greenyellow);
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(2px 1px 5px red);
  }
`;

export default function AzureBadges() {
  return (
    <>
      {[azAdmin, azAi, azSecurity].map((src, i) => (
        <AzBadgeContainer
          key={`azBadge${i}`}
          href="https://www.credly.com/users/mayank-kumar-chaudhari/badges"
          target="_blank"
        >
          <Image src={src} height={140} width={140} />
        </AzBadgeContainer>
      ))}
    </>
  );
}
