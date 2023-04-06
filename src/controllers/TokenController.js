import jwt from "jsonwebtoken";
import User from "../models/user";

class TokenContronller {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ["credenciais inválidas"],
      });
    }
    // chacando email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ["usuario não existe"],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["senha inválida"],
      });
    }
    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenContronller();