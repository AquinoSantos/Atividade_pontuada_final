import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import contatoRoutes from "./routes/contatoRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contatoRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("Banco sincronizado com sucesso!");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});