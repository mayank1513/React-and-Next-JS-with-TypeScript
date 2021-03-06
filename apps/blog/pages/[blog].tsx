import { getBlogs } from "../backend/utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";
import yaml from "js-yaml";
import { Clap } from "ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

const FloatingIcon = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 30px;
    padding: 10px 20px;
    background: white;
    box-shadow: 0 2px 10px 1px #5555;
    cursor: pointer;
    color: #555;
    svg {
      margin-right: 10px;
    }
    &:hover {
      color: #000;
    }
  }
`;

const debouceObj = {
  timeOut: null,
  localLikes: 0,
  debounceTime: 500, // in ms
};

export default function Blog(props) {
  const router = useRouter();
  const { blog } = router.query;
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    fetch(`/api/likes/${blog}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data?.likes);
      })
      .catch(console.error);
  }, [blog]);

  const handleClaps = () => {
    setLikes((likes) => likes + 1);
    debouceObj.localLikes++;
    if (debouceObj.timeOut) clearTimeout(debouceObj.timeOut);

    debouceObj.timeOut = setTimeout(() => {
      fetch(`/api/likes/${blog}`, {
        method: "POST",
        body: JSON.stringify({
          likes: debouceObj.localLikes,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // in case user stopped hitting clap for 500 ms + and then started clicking again before API returns, we will have updated data
          setLikes(data?.likes + debouceObj.localLikes);
        })
        .catch(console.error);
      debouceObj.localLikes = 0;
    }, debouceObj.debounceTime);
  };
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
      <FloatingIcon>
        <div onClick={handleClaps}>
          <Clap /> {likes}{" "}
          {props.data.data.url && (
            <>
              | &nbsp;
              <a
                href={props.data.data.url}
                target="_blank"
                rel="noopener noreferrer">
                Read Full Article
              </a>
            </>
          )}
        </div>
      </FloatingIcon>
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
