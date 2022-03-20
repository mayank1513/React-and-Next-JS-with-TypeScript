import { useRouter } from "next/router"
import { useEffect, useState } from "react";

type RepoType = { name: string, description: string, html_url: string, default_branch: string }
export default function() {
    const router = useRouter();
    const [repos, setRepos] = useState<RepoType[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch(`https://api.github.com/users/${router?.query?.login_id}/repos`);
                const data = await result.json();
                setRepos(data.map(({ name, description, html_url, default_branch }: RepoType) => ({
                    name, description, html_url, default_branch
                })))
            } catch (error) {
                console.log(error)
            }
        })()
    }, [router?.query?.login_id])

    return repos?.length ? (
        <ul className="container">
            {
                repos?.map(repo => (<li>
                    <p>
                        <h3>{repo.name}</h3>
                        {repo.description}
                    </p>
                </li>))
            }
        </ul>
    ) : (
        <div className="container">
            Did not find any Repo here!
        </div>
    )
}