import sql from "mssql";
const dbSettings = {
  user: "sa",
  password: "Password123!",
  server: "localhost",
  database: "BD_TAWA",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

export { sql };
