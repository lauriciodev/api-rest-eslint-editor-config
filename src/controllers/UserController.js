import User from "../models/user";

class UserContronller {
  async store(req, res) {
    const novouser = await User.create({
      nome: "lauricio",
      email: "lauricio@gmail.com",
      password: "1234123",
    });
    res.json(novouser);
  }
}

export default new UserContronller();
