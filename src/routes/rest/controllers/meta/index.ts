import express from "express";

const router = express.Router();
import {getMetaList} from "./metaFacade";


/**
 * @swagger
 *
 * /meta:
 *   get:
 *     description: returns metadata
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
router.route("").get(getMetaList);

export default router;