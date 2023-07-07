"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _consultingController = require("../controllers/consultingController");
var router = (0, _express.Router)();
router.get("/consultingdep", _consultingController.getDepeartment);
router.get("/consultingdoc", _consultingController.getDocument);
router.get("/consultingprov", _consultingController.getProvincia);
router.get("/consultinubig", _consultingController.getUbigeo);
var _default = router;
exports["default"] = _default;