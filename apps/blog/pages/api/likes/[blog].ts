import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prismaClient";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { blog } = req.query;
    const data = await prisma.likes.findFirst({
        where: {
            blogUrl: blog as string
        }
    })
    let likes = data?.likes || 0;
    if (req.method == "POST") {
        const data = await prisma.likes.upsert({
            where: {
                blogUrl: blog as string
            },
            update: {
                likes: likes + 1
            },
            create: {
                blogUrl: blog as string,
                likes: 1
            }
        })
        likes = data?.likes || 0
    }
    res.status(200).json({ likes })
}