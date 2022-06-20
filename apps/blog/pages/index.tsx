import Link from "next/link";
import { getBlogs } from "../backend/utils";

export default function Docs({ blogs }) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.blogUrl} style={{ margin: "20px 0" }}>
            <Link href={"/" + blog.blogUrl}>
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

  return {
    props: {
      blogs: getBlogs(),
    },
  };
}
