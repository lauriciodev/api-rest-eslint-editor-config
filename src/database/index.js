import Sequelize from "sequelize";
import databaseconf from "../config/config";
import aluno from "../models/aluno";
import user from "../models/user";

const models = [aluno, user];
const connection = new Sequelize(databaseconf);
/* const connection = new Sequelize("escola", "root", "senhafacil@2030", {
  host: "34.95.229.193",
  dialect: "mariadb",
}); */
models.forEach((model) => {
  model.init(connection);
});
