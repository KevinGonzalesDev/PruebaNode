// const express = require("express");
// const app = express();
// import config from "./config";

// app.listen(3000, () => {
//   console.log("Server is running on port: ", process.env.PORT || "8");
// });

import app from "./app";
app.listen(app.get("port"));

console.log("server on port ", app.get("port"));
