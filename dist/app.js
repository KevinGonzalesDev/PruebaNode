"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _personasRoutes = _interopRequireDefault(require("./routes/personasRoutes"));
var _consultingRoutes = _interopRequireDefault(require("./routes/consultingRoutes"));
var app = (0, _express["default"])();
app.set("port", _config["default"].port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_personasRoutes["default"]);
app.use(_consultingRoutes["default"]);
var _default = app;
exports["default"] = _default;