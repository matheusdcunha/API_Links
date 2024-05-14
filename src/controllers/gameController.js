import game from "../models/Game.js";

class GameController {
  static formater() {
    const rawDate = new Date();
    return `${rawDate.getDate()}/${
      rawDate.getMonth() + 1
    }/${rawDate.getFullYear()}`;
  }

  static async listGames(req, res) {
    try {
      const gamesList = await game.find({});
      res.status(200).json(gamesList);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - FAILED TO LIST GAMES.` });
    }
  }

  static async listGameByID(req, res) {
    try {
      const id = req.params.id;
      const gameFind = await game.findById(id);
      res.status(200).json(gameFind);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - FAILED TO LIST THIS GAME.` });
    }
  }

  static async createGame(req, res) {
    const newGame = req.body;

    const formater = () => {
      const rawDate = new Date();
      return `${rawDate.getDate()}/${
        rawDate.getMonth() + 1
      }/${rawDate.getFullYear()}`;
    };

    try {
      const gameComplete = { ...newGame, last_mod: formater() };
      const gameCreate = await game.create(gameComplete);
      res
        .status(201)
        .json({ message: "Game created successfully.", game: gameCreate });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - FAILED TO CREATE A GAME.` });
    }
  }

  static async updateGameByID(req, res) {
    const gameUpdated = req.body;

    const formater = () => {
      const rawDate = new Date();
      return `${rawDate.getDate()}/${
        rawDate.getMonth() + 1
      }/${rawDate.getFullYear()}`;
    };

    try {
      const id = req.params.id;
      const gameCompleted = { ...gameUpdated, last_mod: formater() };
      await game.findByIdAndUpdate(id, gameCompleted);
      res.status(200).json({ message: "Updated Game" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - FAILED TO UPDATE THIS GAME.` });
    }
  }

  static async deleteGame(req, res) {
    try {
      const name = req.body.name;
      const id = req.params.id;
      await game.findByIdAndDelete(id);
      res.status(200).json({ message: "Game Deleted", name: name });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - FAILED TO DELETE THIS GAME.` });
    }
  }
}

export default GameController;
