import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 30],
              msg: "O nome deve ter entre 3 e 30 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 20],
              msg: "A senha deve conter entre 6 e 20 caracteres",
            },
          },
        },
      },
      {
        sequelize,
        modelName: "alunos",
      }
    );
    this.addHook("beforeCreate", async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });
    return this;
  }
}
