import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Contato = sequelize.define("Contato", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Contato;