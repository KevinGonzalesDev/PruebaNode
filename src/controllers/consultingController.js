import { getConnection } from "../database/connection";

export const getDepeartment = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("EXEC USP_LISTA_DEPARTAMENTO");
  console.log(result);

  res.json(result.recordset);
};

export const getProvincia = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("EXEC USP_LISTA_PROVINCIA");
  console.log(result);

  res.json(result.recordset);
};

export const getUbigeo = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("EXEC USP_LISTA_UBIGEO");
  console.log(result);

  res.json(result.recordset);
};

export const getDocument = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("EXEC USP_LISTA_TIPODOCUMENTO");
  console.log(result);

  res.json(result.recordset);
};
