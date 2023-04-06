import User from "../models/user";

class UserContronller {
  async store(req, res) {
    try {
      const novouser = await User.create(req.body);
      return res.json(novouser);
    } catch (erro) {
      return res.status(400).json({ erros: erro.errors.map((e) => e.message) });
    }
  }

  // index

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      if (!users) {
        return res.json({
          errors: "usuario não exite",
        });
      }
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // update

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["id não enviado"],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["usuario não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (erro) {
      return res.status(400).json({ erros: erro.errors.map((e) => e.message) });
    }
  }

  // delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["id não enviado"],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["usuario não existe"],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (erro) {
      return res.status(400).json({ erros: erro.errors.map((e) => e.message) });
    }
  }
}

export default new UserContronller();
