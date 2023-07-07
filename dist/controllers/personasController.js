"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePersonaByid = exports.postPersonas = exports.getPersonasbyid = exports.getPersonas = exports.deletePersonasbyid = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var getPersonas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query("SELECT * FROM H001_Persona");
        case 6:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getPersonas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPersonas = getPersonas;
var postPersonas = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, CodPersona, IdTipoDocumento, NumDocIdentidad, Nombre, ApellidoPaterno, ApellidoMaterno, Sexo, FechaNacimiento, IdPertenenciaEtnica, IdPaisNacimiento, CodUbigeoNacimiento, Foto, IdGradoInstruccion, IdReligion, CentroEducativo, IdEstadoCivil, IdOcupacion, TelefonoFijo, TelefonoMovil, Correo, IdTipoPersona, TratamientoDato, TerminoCondicion, CodUsuario, CodUsuCreaRegistro, FechaCreaRegistro, CodUsuModificaRegistro, FechaModificaRegistro, EstadoRegistro, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, CodPersona = _req$body.CodPersona, IdTipoDocumento = _req$body.IdTipoDocumento, NumDocIdentidad = _req$body.NumDocIdentidad, Nombre = _req$body.Nombre, ApellidoPaterno = _req$body.ApellidoPaterno, ApellidoMaterno = _req$body.ApellidoMaterno, Sexo = _req$body.Sexo, FechaNacimiento = _req$body.FechaNacimiento, IdPertenenciaEtnica = _req$body.IdPertenenciaEtnica, IdPaisNacimiento = _req$body.IdPaisNacimiento, CodUbigeoNacimiento = _req$body.CodUbigeoNacimiento, Foto = _req$body.Foto, IdGradoInstruccion = _req$body.IdGradoInstruccion, IdReligion = _req$body.IdReligion, CentroEducativo = _req$body.CentroEducativo, IdEstadoCivil = _req$body.IdEstadoCivil, IdOcupacion = _req$body.IdOcupacion, TelefonoFijo = _req$body.TelefonoFijo, TelefonoMovil = _req$body.TelefonoMovil, Correo = _req$body.Correo, IdTipoPersona = _req$body.IdTipoPersona, TratamientoDato = _req$body.TratamientoDato, TerminoCondicion = _req$body.TerminoCondicion, CodUsuario = _req$body.CodUsuario, CodUsuCreaRegistro = _req$body.CodUsuCreaRegistro, FechaCreaRegistro = _req$body.FechaCreaRegistro, CodUsuModificaRegistro = _req$body.CodUsuModificaRegistro, FechaModificaRegistro = _req$body.FechaModificaRegistro, EstadoRegistro = _req$body.EstadoRegistro;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("CodPersona", _connection.sql.VarChar, "valorCodPersona").input("IdTipoDocumento ", _connection.sql.Int, "valorIdTipoDocumento").input("NumDocIdentidad ", _connection.sql.Char, "valorNumDocIdentidad").input("Nombre", _connection.sql.VarChar, "valorNombre").input("ApellidoPaterno", _connection.sql.VarChar, "valorApellidoPaterno").input("ApellidoMaterno", _connection.sql.VarChar, "valorApellidoMaterno").input("Sexo", _connection.sql.Char, "valorSexo").input("FechaNacimiento   ", _connection.sql.Date, "valorFechaNacimiento").input("IdPertenenciaEtnica", _connection.sql.Int, "valorIdPertenenciaEtnica").input("IdPaisNacimiento", _connection.sql.Int, "valorIdPaisNacimiento").input("CodUbigeoNacimiento", _connection.sql.Char, "valorCodUbigeoNacimiento").input("Foto", _connection.sql.VarChar, "valorFoto").input("IdGradoInstruccion", _connection.sql.Int, "valorIdGradoInstruccion").input("IdReligion", _connection.sql.Int, "valorIdReligion").input("CentroEducativo", _connection.sql.VarChar, "valorCentroEducativo").input("IdEstadoCivil", _connection.sql.Int, "valorIdEstadoCivil").input("IdOcupacion", _connection.sql.Int, "valorIdOcupacion").input("TelefonoFijo", _connection.sql.Char, "valorTelefonoFijo").input("TelefonoMovil", _connection.sql.Char, "valorTelefonoMovil").input("Correo", _connection.sql.VarChar, "valorCorreo").input("IdTipoPersona", _connection.sql.Int, "valorIdTipoPersona").input("TratamientoDato", _connection.sql.Bit, "valorTratamientoDato").input("TerminoCondicion", _connection.sql.Bit, "valorTerminoCondicion").input("CodUsuario", _connection.sql.VarChar, "valorCodUsuario").input("CodUsuCreaRegistro", _connection.sql.VarChar, "valorCodUsuCreaRegistro").input("FechaCreaRegistro", _connection.sql.DateTime, "valorFechaCreaRegistro").input("CodUsuModificaRegistro", _connection.sql.VarChar, "valorCodUsuModificaRegistro").input("FechaModificaRegistro", _connection.sql.VarChar, "valorFechaModificaRegistro").input("EstadoRegistro", _connection.sql.Bit, "valorEstadoRegistro");
        case 7:
          _context2.next = 9;
          return request.execute("USP_INSERTAR_PERSONA");
        case 9:
          result = _context2.sent;
          console.log("Insertado Correctamente");
          console.log(result);
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14]]);
  }));
  return function postPersonas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.postPersonas = postPersonas;
var getPersonasbyid = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("Id", id).query("SELECT * FROM H001_Persona where CodPersona = @Id");
        case 6:
          result = _context3.sent;
          console.log(result);
          res.send(result.recordset[0]);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getPersonasbyid(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getPersonasbyid = getPersonasbyid;
var deletePersonasbyid = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("Id", id).query("DELETE FROM H001_Persona where CodPersona = @Id");
        case 6:
          result = _context4.sent;
          console.log(result);
          res.sendStatus(204);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deletePersonasbyid(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deletePersonasbyid = deletePersonasbyid;
var updatePersonaByid = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, CodPersona, IdTipoDocumento, NumDocIdentidad, Nombre, ApellidoPaterno, ApellidoMaterno, Sexo, FechaNacimiento, IdPertenenciaEtnica, IdPaisNacimiento, CodUbigeoNacimiento, Foto, IdGradoInstruccion, IdReligion, CentroEducativo, IdEstadoCivil, IdOcupacion, TelefonoFijo, TelefonoMovil, Correo, IdTipoPersona, TratamientoDato, TerminoCondicion, CodUsuario, CodUsuCreaRegistro, FechaCreaRegistro, CodUsuModificaRegistro, FechaModificaRegistro, EstadoRegistro, id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, CodPersona = _req$body2.CodPersona, IdTipoDocumento = _req$body2.IdTipoDocumento, NumDocIdentidad = _req$body2.NumDocIdentidad, Nombre = _req$body2.Nombre, ApellidoPaterno = _req$body2.ApellidoPaterno, ApellidoMaterno = _req$body2.ApellidoMaterno, Sexo = _req$body2.Sexo, FechaNacimiento = _req$body2.FechaNacimiento, IdPertenenciaEtnica = _req$body2.IdPertenenciaEtnica, IdPaisNacimiento = _req$body2.IdPaisNacimiento, CodUbigeoNacimiento = _req$body2.CodUbigeoNacimiento, Foto = _req$body2.Foto, IdGradoInstruccion = _req$body2.IdGradoInstruccion, IdReligion = _req$body2.IdReligion, CentroEducativo = _req$body2.CentroEducativo, IdEstadoCivil = _req$body2.IdEstadoCivil, IdOcupacion = _req$body2.IdOcupacion, TelefonoFijo = _req$body2.TelefonoFijo, TelefonoMovil = _req$body2.TelefonoMovil, Correo = _req$body2.Correo, IdTipoPersona = _req$body2.IdTipoPersona, TratamientoDato = _req$body2.TratamientoDato, TerminoCondicion = _req$body2.TerminoCondicion, CodUsuario = _req$body2.CodUsuario, CodUsuCreaRegistro = _req$body2.CodUsuCreaRegistro, FechaCreaRegistro = _req$body2.FechaCreaRegistro, CodUsuModificaRegistro = _req$body2.CodUsuModificaRegistro, FechaModificaRegistro = _req$body2.FechaModificaRegistro, EstadoRegistro = _req$body2.EstadoRegistro;
          id = req.params.id;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("CodPersona", _connection.sql.VarChar, "valorCodPersona").input("IdTipoDocumento ", _connection.sql.Int, "valorIdTipoDocumento").input("NumDocIdentidad ", _connection.sql.Char, "valorNumDocIdentidad").input("Nombre", _connection.sql.VarChar, "valorNombre").input("ApellidoPaterno", _connection.sql.VarChar, "valorApellidoPaterno").input("ApellidoMaterno", _connection.sql.VarChar, "valorApellidoMaterno").input("Sexo", _connection.sql.Char, "valorSexo").input("FechaNacimiento   ", _connection.sql.Date, "valorFechaNacimiento").input("IdPertenenciaEtnica", _connection.sql.Int, "valorIdPertenenciaEtnica").input("IdPaisNacimiento", _connection.sql.Int, "valorIdPaisNacimiento").input("CodUbigeoNacimiento", _connection.sql.Char, "valorCodUbigeoNacimiento").input("Foto", _connection.sql.VarChar, "valorFoto").input("IdGradoInstruccion", _connection.sql.Int, "valorIdGradoInstruccion").input("IdReligion", _connection.sql.Int, "valorIdReligion").input("CentroEducativo", _connection.sql.VarChar, "valorCentroEducativo").input("IdEstadoCivil", _connection.sql.Int, "valorIdEstadoCivil").input("IdOcupacion", _connection.sql.Int, "valorIdOcupacion").input("TelefonoFijo", _connection.sql.Char, "valorTelefonoFijo").input("TelefonoMovil", _connection.sql.Char, "valorTelefonoMovil").input("Correo", _connection.sql.VarChar, "valorCorreo").input("IdTipoPersona", _connection.sql.Int, "valorIdTipoPersona").input("TratamientoDato", _connection.sql.Bit, "valorTratamientoDato").input("TerminoCondicion", _connection.sql.Bit, "valorTerminoCondicion").input("CodUsuario", _connection.sql.VarChar, "valorCodUsuario").input("CodUsuCreaRegistro", _connection.sql.VarChar, "valorCodUsuCreaRegistro").input("FechaCreaRegistro", _connection.sql.DateTime, "valorFechaCreaRegistro").input("CodUsuModificaRegistro", _connection.sql.VarChar, "valorCodUsuModificaRegistro").input("FechaModificaRegistro", _connection.sql.VarChar, "valorFechaModificaRegistro").input("EstadoRegistro", _connection.sql.Bit, "valorEstadoRegistro").query("UPDATE H001_Persona SET CodPersona = @CodPersona, IdTipoDocumento = @IdTipoDocumento, NumDocIdentidad = @NumDocIdentidad, Nombre = @Nombre, ApellidoPaterno = @ApellidoPaterno, ApellidoMaterno = @ApellidoMaterno, Sexo = @Sexo, FechaNacimiento = @FechaNacimiento, IdPertenenciaEtnica = @IdPertenenciaEtnica, IdPaisNacimiento = @IdPaisNacimiento, CodUbigeoNacimiento = @CodUbigeoNacimiento, Foto = @Foto, IdGradoInstruccion = @IdGradoInstruccion, IdReligion = @IdReligion, CentroEducativo = @CentroEducativo, IdEstadoCivil = @IdEstadoCivil, IdOcupacion = @IdOcupacion, TelefonoFijo = @TelefonoFijo, TelefonoMovil = @TelefonoMovil, Correo = @Correo, IdTipoPersona = @IdTipoPersona, TratamientoDato = @TratamientoDato, TerminoCondicion = @TerminoCondicion, CodUsuario = @CodUsuario, CodUsuCreaRegistro = @CodUsuCreaRegistro, FechaCreaRegistro = @FechaCreaRegistro, CodUsuModificaRegistro = @CodUsuModificaRegistro, FechaModificaRegistro = @FechaModificaRegistro, EstadoRegistro = @EstadoRegistro WHERE CodPersona = @Id");
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function updatePersonaByid(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updatePersonaByid = updatePersonaByid;