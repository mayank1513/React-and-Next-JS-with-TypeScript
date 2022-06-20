import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function () {
  const router = useRouter();
  const [readmeData, setReadmeData] = useState("");
  const { login_id, repo, branch } = router?.query;
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/${login_id}/${repo}/${branch}/README.md`
    )
      .then((res) => res.text())
      .then(setReadmeData)
      .catch((err) =>
        setReadmeData(`# Error Occured!
            ${err}`)
      );
  }, [router.query]);
  return (
    <div className="container">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, ...props }) => (
            <img
              src={
                src?.startsWith("http")
                  ? src
                  : `https://raw.githubusercontent.com/${login_id}/${repo}/${branch}/${src}`
              }
              {...props}
            />
          ),
        }}>
        {readmeData}
      </ReactMarkdown>
    </div>
  );
}
