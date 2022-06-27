import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ReadMe() {
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
  }, [login_id, repo, branch]);
  return (
    <div className="container">
      <ReactMarkdown>{readmeData}</ReactMarkdown>
    </div>
  );
}
