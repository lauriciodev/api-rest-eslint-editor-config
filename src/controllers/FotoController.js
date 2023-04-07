import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from "../models/foto";

const upload = multer(multerConfig).single("foto");

class FotoContronller {
  store(req, res) {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (erro) {
        res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

export default new FotoContronller();
