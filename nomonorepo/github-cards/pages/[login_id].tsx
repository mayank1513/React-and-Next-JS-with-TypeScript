import { useRouter } from "next/router"

export default function() {
    const router = useRouter();
    return (
        <div style={{padding: '10px'}}>
            {router.query.login_id}
        </div>
    )
}