import { getBlogs } from "../backend/utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

export default function Blog(props) {
  return (
    <Container>
      <ReactMarkdown
        components={{
          img: (props) => (
            <ImageContainer>
              <img {...props} />
            </ImageContainer>
          ),
        }}>
        {props.data.content}
      </ReactMarkdown>
      ;
    </Container>
  );
}

export function getStaticPaths() {
  const paths = getBlogs().map(({ blogUrl }) => ({
    params: {
      blog: blogUrl,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const fileName = params.blog.replace(/_/g, " ") + ".md";
  const data = matter(
    fs.readFileSync(path.join(process.cwd(), "blogs", fileName))
  );
  return {
    props: {
      data,
    },
  };
}
