/**
 * this module will be used to implement all middleware that REST controller needs, e.g., swagger that is not needed by
 * view controller. It can also be used for custom 404 handling
 */
import express from "express";
import cors from "cors";
// @ts-ignore
import metaController from "./controllers/meta";
import loginController from "./controllers/login";
import swaggerUi from "swagger-ui-express";
import spec from "../../swagger";

const router = express.Router();

// configure cors only for rest endpoints
router.all("*", cors());

/**
 * Assuming that we'll need to log the request method for every API call
 */
router.use((req, res, next) => {
    console.log(req.method);
    next();
});

// importing all rest endpoints
router.use("/login", loginController);
router.use("/meta", metaController);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

/**
 * handles 404 for API. In this case a JSON response with HTTP status 404 will be returned.
 */
router.use("*", (req, res, next) => {
    res.sendStatus(404).send("Not Found");
});


export default router;
