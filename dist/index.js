"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
// const express = require("express");
// const app = express();
// import config from "./config";

// app.listen(3000, () => {
//   console.log("Server is running on port: ", process.env.PORT || "8");
// });

_app["default"].listen(_app["default"].get("port"));
console.log("server on port ", _app["default"].get("port"));