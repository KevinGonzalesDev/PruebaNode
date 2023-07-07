import { Router } from "express";
import { getDepeartment } from "../controllers/consultingController";
import { getDocument } from "../controllers/consultingController";
import { getProvincia } from "../controllers/consultingController";
import { getUbigeo } from "../controllers/consultingController";

const router = Router();
router.get("/consultingdep", getDepeartment);
router.get("/consultingdoc", getDocument);
router.get("/consultingprov", getProvincia);
router.get("/consultinubig", getUbigeo);

export default router;
