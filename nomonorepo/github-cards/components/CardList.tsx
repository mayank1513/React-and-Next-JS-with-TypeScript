import { profileType } from "../utils"
import Card from "./Card"

export default function CardList({ profiles }: { profiles: profileType[] }) {
    return (
        <div>
            {
                profiles.map(profile => <Card key={profile.login} profile={profile} />)
            }
        </div>
    )
}