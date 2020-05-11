import express from "express";

const router = express.Router();

router.route("").get((req, res, next) => {
    // @ts-ignore
    if (!req.username || !req.password) {
         res.status(401).send("go away further");
        return
    }

    return;
    console.log('bye');
});

export default router;