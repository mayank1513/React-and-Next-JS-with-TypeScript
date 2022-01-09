import { profileType } from "../utils"

interface CardPropType { profile: profileType }

export default function Card({ profile }: CardPropType) {
    return (
        <>
            <h1>Card</h1>
        </>
    )
}