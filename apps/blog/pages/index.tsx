import { Button } from "ui";
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Docs({ blogs }) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li>
            <Link href={blog.blogUrl}>
              <a>{blog.blogTitle}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  // fetch / process some data
  const cwd = process.cwd();
  const blogs = fs.readdirSync(path.join(cwd, "blogs")).map((fileName) => {
    const name = fileName.replace(".md", "");
    return {
      blogTitle: name,
      blogUrl: encodeURI(name),
    };
  });
  return {
    props: {
      blogs,
    },
  };
}
