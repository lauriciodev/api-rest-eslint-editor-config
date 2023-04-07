import Sequelize from "sequelize";
import databaseconf from "../config/config";
import aluno from "../models/aluno";
import user from "../models/user";
import foto from "../models/foto";

const models = [aluno, user, foto];
const connection = new Sequelize(databaseconf);
models.forEach((model) => {
  model.init(connection);
});
models.forEach((model) => {
  model.associate && model.associate(connection.models);
});
