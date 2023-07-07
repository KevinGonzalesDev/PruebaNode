import { getConnection, sql } from "../database/connection";

export const getPersonas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM H001_Persona");
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postPersonas = async (req, res) => {
  const {
    CodPersona,
    IdTipoDocumento,
    NumDocIdentidad,
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    Sexo,
    FechaNacimiento,
    IdPertenenciaEtnica,
    IdPaisNacimiento,
    CodUbigeoNacimiento,
    Foto,
    IdGradoInstruccion,
    IdReligion,
    CentroEducativo,
    IdEstadoCivil,
    IdOcupacion,
    TelefonoFijo,
    TelefonoMovil,
    Correo,
    IdTipoPersona,
    TratamientoDato,
    TerminoCondicion,
    CodUsuario,
    CodUsuCreaRegistro,
    FechaCreaRegistro,
    CodUsuModificaRegistro,
    FechaModificaRegistro,
    EstadoRegistro,
  } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("CodPersona", sql.VarChar, "valorCodPersona")
      .input("IdTipoDocumento ", sql.Int, "valorIdTipoDocumento")
      .input("NumDocIdentidad ", sql.Char, "valorNumDocIdentidad")
      .input("Nombre", sql.VarChar, "valorNombre")
      .input("ApellidoPaterno", sql.VarChar, "valorApellidoPaterno")
      .input("ApellidoMaterno", sql.VarChar, "valorApellidoMaterno")
      .input("Sexo", sql.Char, "valorSexo")
      .input("FechaNacimiento   ", sql.Date, "valorFechaNacimiento")
      .input("IdPertenenciaEtnica", sql.Int, "valorIdPertenenciaEtnica")
      .input("IdPaisNacimiento", sql.Int, "valorIdPaisNacimiento")
      .input("CodUbigeoNacimiento", sql.Char, "valorCodUbigeoNacimiento")
      .input("Foto", sql.VarChar, "valorFoto")
      .input("IdGradoInstruccion", sql.Int, "valorIdGradoInstruccion")
      .input("IdReligion", sql.Int, "valorIdReligion")
      .input("CentroEducativo", sql.VarChar, "valorCentroEducativo")
      .input("IdEstadoCivil", sql.Int, "valorIdEstadoCivil")
      .input("IdOcupacion", sql.Int, "valorIdOcupacion")
      .input("TelefonoFijo", sql.Char, "valorTelefonoFijo")
      .input("TelefonoMovil", sql.Char, "valorTelefonoMovil")
      .input("Correo", sql.VarChar, "valorCorreo")
      .input("IdTipoPersona", sql.Int, "valorIdTipoPersona")
      .input("TratamientoDato", sql.Bit, "valorTratamientoDato")
      .input("TerminoCondicion", sql.Bit, "valorTerminoCondicion")
      .input("CodUsuario", sql.VarChar, "valorCodUsuario")
      .input("CodUsuCreaRegistro", sql.VarChar, "valorCodUsuCreaRegistro")
      .input("FechaCreaRegistro", sql.DateTime, "valorFechaCreaRegistro")
      .input(
        "CodUsuModificaRegistro",
        sql.VarChar,
        "valorCodUsuModificaRegistro"
      )
      .input("FechaModificaRegistro", sql.VarChar, "valorFechaModificaRegistro")
      .input("EstadoRegistro", sql.Bit, "valorEstadoRegistro");

    // .query("insert into H001_Persona (Nombre) Values (@Nombre)");
    const result = await request.execute("USP_INSERTAR_PERSONA");
    console.log("Insertado Correctamente");
    console.log(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

  // const pool = await getConnection();
  // const result = await pool.request().query("SELECT * FROM H001_Persona");
  // console.log(result);

  // res.json(result.recordset);
};

export const getPersonasbyid = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query("SELECT * FROM H001_Persona where CodPersona = @Id");
  console.log(result);
  res.send(result.recordset[0]);
};

export const deletePersonasbyid = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query("DELETE FROM H001_Persona where CodPersona = @Id");
  console.log(result);
  res.sendStatus(204);
};

export const updatePersonaByid = async (req, res) => {
  const {
    CodPersona,
    IdTipoDocumento,
    NumDocIdentidad,
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    Sexo,
    FechaNacimiento,
    IdPertenenciaEtnica,
    IdPaisNacimiento,
    CodUbigeoNacimiento,
    Foto,
    IdGradoInstruccion,
    IdReligion,
    CentroEducativo,
    IdEstadoCivil,
    IdOcupacion,
    TelefonoFijo,
    TelefonoMovil,
    Correo,
    IdTipoPersona,
    TratamientoDato,
    TerminoCondicion,
    CodUsuario,
    CodUsuCreaRegistro,
    FechaCreaRegistro,
    CodUsuModificaRegistro,
    FechaModificaRegistro,
    EstadoRegistro,
  } = req.body;
  const { id } = req.params;
  const pool = await getConnection();
  await pool
    .request()
    .input("CodPersona", sql.VarChar, "valorCodPersona")
    .input("IdTipoDocumento ", sql.Int, "valorIdTipoDocumento")
    .input("NumDocIdentidad ", sql.Char, "valorNumDocIdentidad")
    .input("Nombre", sql.VarChar, "valorNombre")
    .input("ApellidoPaterno", sql.VarChar, "valorApellidoPaterno")
    .input("ApellidoMaterno", sql.VarChar, "valorApellidoMaterno")
    .input("Sexo", sql.Char, "valorSexo")
    .input("FechaNacimiento   ", sql.Date, "valorFechaNacimiento")
    .input("IdPertenenciaEtnica", sql.Int, "valorIdPertenenciaEtnica")
    .input("IdPaisNacimiento", sql.Int, "valorIdPaisNacimiento")
    .input("CodUbigeoNacimiento", sql.Char, "valorCodUbigeoNacimiento")
    .input("Foto", sql.VarChar, "valorFoto")
    .input("IdGradoInstruccion", sql.Int, "valorIdGradoInstruccion")
    .input("IdReligion", sql.Int, "valorIdReligion")
    .input("CentroEducativo", sql.VarChar, "valorCentroEducativo")
    .input("IdEstadoCivil", sql.Int, "valorIdEstadoCivil")
    .input("IdOcupacion", sql.Int, "valorIdOcupacion")
    .input("TelefonoFijo", sql.Char, "valorTelefonoFijo")
    .input("TelefonoMovil", sql.Char, "valorTelefonoMovil")
    .input("Correo", sql.VarChar, "valorCorreo")
    .input("IdTipoPersona", sql.Int, "valorIdTipoPersona")
    .input("TratamientoDato", sql.Bit, "valorTratamientoDato")
    .input("TerminoCondicion", sql.Bit, "valorTerminoCondicion")
    .input("CodUsuario", sql.VarChar, "valorCodUsuario")
    .input("CodUsuCreaRegistro", sql.VarChar, "valorCodUsuCreaRegistro")
    .input("FechaCreaRegistro", sql.DateTime, "valorFechaCreaRegistro")
    .input("CodUsuModificaRegistro", sql.VarChar, "valorCodUsuModificaRegistro")
    .input("FechaModificaRegistro", sql.VarChar, "valorFechaModificaRegistro")
    .input("EstadoRegistro", sql.Bit, "valorEstadoRegistro")
    .query(
      "UPDATE H001_Persona SET CodPersona = @CodPersona, IdTipoDocumento = @IdTipoDocumento, NumDocIdentidad = @NumDocIdentidad, Nombre = @Nombre, ApellidoPaterno = @ApellidoPaterno, ApellidoMaterno = @ApellidoMaterno, Sexo = @Sexo, FechaNacimiento = @FechaNacimiento, IdPertenenciaEtnica = @IdPertenenciaEtnica, IdPaisNacimiento = @IdPaisNacimiento, CodUbigeoNacimiento = @CodUbigeoNacimiento, Foto = @Foto, IdGradoInstruccion = @IdGradoInstruccion, IdReligion = @IdReligion, CentroEducativo = @CentroEducativo, IdEstadoCivil = @IdEstadoCivil, IdOcupacion = @IdOcupacion, TelefonoFijo = @TelefonoFijo, TelefonoMovil = @TelefonoMovil, Correo = @Correo, IdTipoPersona = @IdTipoPersona, TratamientoDato = @TratamientoDato, TerminoCondicion = @TerminoCondicion, CodUsuario = @CodUsuario, CodUsuCreaRegistro = @CodUsuCreaRegistro, FechaCreaRegistro = @FechaCreaRegistro, CodUsuModificaRegistro = @CodUsuModificaRegistro, FechaModificaRegistro = @FechaModificaRegistro, EstadoRegistro = @EstadoRegistro WHERE CodPersona = @Id"
    );
};
