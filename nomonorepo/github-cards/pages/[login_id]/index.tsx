import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

type RepoType = { name: string, description: string, html_url: string, default_branch: string }
export default function () {
    const router = useRouter();
    const [repos, setRepos] = useState<RepoType[]>([]);
    const { login_id } = router?.query;

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch(`https://api.github.com/users/${login_id}/repos`);
                const data = await result.json();
                setRepos(data.map(({ name, description, html_url, default_branch }: RepoType) => ({
                    name, description, html_url, default_branch
                })))
            } catch (error) {
                console.log(error)
            }
        })()
    }, [login_id])

    return repos?.length ? (
        <ul className="container">
            {
                repos?.map(({ name, description, html_url, default_branch }) => (
                    <Link href={`${login_id}/${name}/${default_branch}`}>
                        <li>
                            <p>
                                <h3>{name}</h3>
                                {description}
                            </p>
                        </li></Link>))
            }
        </ul>
    ) : (
        <div className="container">
            Did not find any Repo here!
        </div>
    )
}