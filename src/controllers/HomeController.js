import Aluno from "../models/aluno";

class HomeContronller {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "juliana",
      sobrenome: "silva",
      email: "juliana43@gmail.com",
    });
    res.json(novoAluno);
  }
}

export default new HomeContronller();
