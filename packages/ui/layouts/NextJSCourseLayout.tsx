import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Header } from "..";

const Container = styled.div/*css*/ `
  width: 100vw;
  max-width: 1200px;
  margin: auto;
  .content {
    padding-top: 20px;
  }
`;

type LayoutProps = {
  children: ReactNode;
  title?: string;
  color?: string;
};

export function NextJSCourseLayout({ children, title, color }: LayoutProps) {
  return (
    <Container style={{ backgroundColor: color }}>
      <Header title={title || "React + Next.js with TypeScript"}></Header>
      <div className="content">{children}</div>
    </Container>
  );
}
