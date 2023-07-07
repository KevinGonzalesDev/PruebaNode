import { Router } from "express";
import {
  postPersonas,
  getPersonas,
  getPersonasbyid,
  deletePersonasbyid,
  updatePersonaByid,
} from "../controllers/personasController";

const router = Router();
router.get("/personas", getPersonas);
router.post("/personas", postPersonas);
router.get("/personas/:id", getPersonasbyid);
router.delete("/personas/:id", deletePersonasbyid);
router.put("/personas/:id", updatePersonaByid);

export default router;
