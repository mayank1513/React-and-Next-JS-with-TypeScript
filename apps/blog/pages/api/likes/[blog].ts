import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { blog } = req.query;
    res.status(200).json({ blog });
}