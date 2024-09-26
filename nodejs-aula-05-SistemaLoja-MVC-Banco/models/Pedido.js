//ORM - Sequelize
import { Sequelize } from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";

//.define cria a tabela no banco
const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});
//não forçar a criação da tabela caso ela já exista
Pedido.sync({ force: false });
export default Pedido;
