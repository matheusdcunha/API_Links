import mongoose, { mongo } from "mongoose";

async function conectarNaDataBase() {
  mongoose.connect(process.env.DB_CONNECTION);

  return mongoose.connection;
}

export default conectarNaDataBase;

// mongodb+srv://matheuscunhafonseca50:123@cluster0.7krwoai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
