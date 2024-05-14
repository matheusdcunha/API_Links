import "dotenv/config";
import app from "./src/app.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Listerning!");
});

// const formater = (data) => {
//   let novaData = new Date(data);
//   return `${novaData.getDate()}/${
//     novaData.getMonth() + 1
//   }/${novaData.getFullYear()}`;
// };
