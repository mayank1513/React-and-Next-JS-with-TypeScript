import { getBlogs } from "../backend/utils";

export default function Blog(props) {
  console.log({ props });
  return (
    <>
      <h1>{props.params.blog}</h1>
    </>
  );
}

export function getStaticPaths() {
  const paths = getBlogs().map(({ blogUrl }) => ({
    params: {
      blog: blogUrl,
    },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
