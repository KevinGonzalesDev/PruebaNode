import express from "express";
import config from "./config";
import personasRoutes from "./routes/personasRoutes";
import consultingRoutes from "./routes/consultingRoutes";

const app = express();

app.set("port", config.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(personasRoutes);
app.use(consultingRoutes);

export default app;
