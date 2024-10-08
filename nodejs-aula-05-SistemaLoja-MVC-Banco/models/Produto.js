//ORM - Sequelize
import { Sequelize } from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";

//.define cria a tabela no banco
const Produto = connection.define("produtos", {
  nomep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//não forçar a criação da tabela caso ela já exista
Produto.sync({ force: false });
export default Produto;
