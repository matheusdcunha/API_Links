import express from "express";
import conectarNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectarNaDataBase();

conexao.on("error", (erro) => {
  console.error("Database Connection Erro!", erro);
});

conexao.once("open", () => {
  console.log("Database Connecting Success!");
});

const app = express();
routes(app);

export default app;
