import Aluno from "../models/aluno";
import Foto from "../models/foto";

class AlunoContronller {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email"],
      order: [
        ["id", "DESC"],
        [Foto, "id", "DESC"],
      ],
      include: {
        model: Foto,
        attributes: ["url", "filename"],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Id não encontrado"],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "email"],
        order: [
          ["id", "DESC"],
          [Foto, "id", "DESC"],
        ],
        include: {
          model: Foto,
          attributes: ["url", "filename"],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não encontrado"],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Id não encontrado"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não encontrado"],
        });
      }

      const updatedAluno = await aluno.update(req.body);
      return res.json(updatedAluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Id não encontrado"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não encontrado"],
        });
      }

      await aluno.destroy();

      return res.json({
        msg: "usuario deletado com sucesso",
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }
  }
}

export default new AlunoContronller();
