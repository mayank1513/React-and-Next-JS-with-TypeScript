import { getBlogs } from "../backend/utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function Blog(props) {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <ReactMarkdown
        components={{
          img: (props) => (
            <div style={{ textAlign: "center" }}>
              <img {...props} />
            </div>
          ),
        }}>
        {props.data.content}
      </ReactMarkdown>
      ;
    </div>
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
