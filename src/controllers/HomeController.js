import Aluno from "../models/aluno";

class HomeContronller {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "lauricio",
      sobrenome: "de sousa",
      email: "lauricio@gmail.com",
    });
    res.json(novoAluno);
  }
}

export default new HomeContronller();
