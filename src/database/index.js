import Sequelize from "sequelize";
import databaseconf from "../config/config";
import aluno from "../models/aluno";
import user from "../models/user";

const models = [aluno, user];
const connection = new Sequelize(databaseconf);
models.forEach((model) => {
  model.init(connection);
});
