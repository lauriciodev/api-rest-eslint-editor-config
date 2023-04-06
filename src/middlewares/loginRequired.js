import jwt from "jsonwebtoken";
import User from "../models/user";

require("dotenv").config();

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["login nescessario"],
    });
  }

  try {
    const dados = jwt.verify(authorization, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuario inválido"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["token inválido"],
    });
  }
};
