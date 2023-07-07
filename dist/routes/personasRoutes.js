"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personasController = require("../controllers/personasController");
var router = (0, _express.Router)();
router.get("/personas", _personasController.getPersonas);
router.post("/personas", _personasController.postPersonas);
router.get("/personas/:id", _personasController.getPersonasbyid);
router["delete"]("/personas/:id", _personasController.deletePersonasbyid);
router.put("/personas/:id", _personasController.updatePersonaByid);
var _default = router;
exports["default"] = _default;