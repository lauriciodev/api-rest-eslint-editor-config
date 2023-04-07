// import Aluno from "../models/aluno";

class FotoContronller {
  async store(req, res) {
    res.json(req.file);
  }
}

export default new FotoContronller();
