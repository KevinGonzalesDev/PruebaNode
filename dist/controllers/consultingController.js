"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUbigeo = exports.getProvincia = exports.getDocument = exports.getDepeartment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var getDepeartment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context.sent;
          _context.next = 5;
          return pool.request().query("EXEC USP_LISTA_DEPARTAMENTO");
        case 5:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDepeartment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getDepeartment = getDepeartment;
var getProvincia = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context2.sent;
          _context2.next = 5;
          return pool.request().query("EXEC USP_LISTA_PROVINCIA");
        case 5:
          result = _context2.sent;
          console.log(result);
          res.json(result.recordset);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getProvincia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getProvincia = getProvincia;
var getUbigeo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context3.sent;
          _context3.next = 5;
          return pool.request().query("EXEC USP_LISTA_UBIGEO");
        case 5:
          result = _context3.sent;
          console.log(result);
          res.json(result.recordset);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUbigeo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getUbigeo = getUbigeo;
var getDocument = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context4.sent;
          _context4.next = 5;
          return pool.request().query("EXEC USP_LISTA_TIPODOCUMENTO");
        case 5:
          result = _context4.sent;
          console.log(result);
          res.json(result.recordset);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getDocument(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getDocument = getDocument;