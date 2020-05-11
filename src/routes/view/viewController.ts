import express from "express";

const router = express.Router();

/**
 * Returns a simple greeting HTMl
 */
router.get("/hello", (req, res) => {
    res.render('index', {title: "hello", message: "Hello there, unknown person"});
});

export default router;
