import { getBlogs } from "../backend/utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";
import yaml from "js-yaml";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ImageContainer = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  text-align: center;
`;

export default function Blog(props) {
  return (
    <Container>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          img: (props) => (
            <ImageContainer>
              <img {...props} />
            </ImageContainer>
          ),
          iframe: (props) => (
            <IframeContainer>
              <iframe {...props} style={{ position: "relative" }} />
            </IframeContainer>
          ),
        }}>
        {props.data.content}
      </ReactMarkdown>
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

export async function getStaticProps({ params }) {
  const fileName = params.blog.replace(/_/g, " ") + ".md";
  const data = matter(
    fs.readFileSync(path.join(process.cwd(), "blogs", fileName), "utf8"),
    {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    }
  );
  return {
    props: {
      data,
    },
  };
}
