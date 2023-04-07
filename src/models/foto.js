import Sequelize, { Model } from "sequelize";
import urlconfig from "../config/urlconfig";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "campo não pode estar vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "campo não pode estar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${urlconfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        modelName: "fotos",
      }
    );
    return this;
  }

  // associando tabelas
  static associate(models) {
    this.belongsTo(models.alunos, { foreignKey: "aluno_id" });
  }
}
