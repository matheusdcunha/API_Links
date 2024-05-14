import express from "express";
import gameController from "../controllers/gameController.js";

const routes = express.Router();

routes.get("/games", gameController.listGames);
routes.get("/games/:id", gameController.listGameByID);
routes.post("/games", gameController.createGame);
routes.put("/games/:id", gameController.updateGameByID);
routes.delete("/games/:id", gameController.deleteGame);

export default routes;
