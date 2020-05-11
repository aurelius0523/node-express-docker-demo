import express from "express";
import viewController from "./viewController";

const router = express.Router();

router.use(viewController);

/**
 * Middleware handling for view's 404 case. It'll return a html instead of JSON
 */
router.use("*", (req, res) => {
    res.render("404", {title: "Not Found", message: "There is no view associate with this url"})
});

export default router;