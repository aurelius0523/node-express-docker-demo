import {Request, Response} from "express";

export const getMetaList = (req: Request, res: Response) => {
    res.send(
        {
            port: process.env.PORT,
            version: "1.0.6",
        }
    )
};

