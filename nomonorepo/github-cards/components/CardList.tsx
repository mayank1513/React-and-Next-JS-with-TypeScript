import { profileType } from "../utils"
import Card from "./Card"
import { useProfileContext } from "../pages"

export default function CardList() {
    const [profiles,] = useProfileContext();
    return (
        <div>
            {
                profiles.map(profile => <Card key={profile.login} profile={profile} />)
            }
        </div>
    )
}