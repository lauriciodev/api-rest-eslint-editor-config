import jwt from "jsonwebtoken";

require("dotenv").config();

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["login nescessario"],
    });
  }

  try {
    const dados = jwt.verify(authorization, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["token inválido"],
    });
  }
};
