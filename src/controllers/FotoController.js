import multer from "multer";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("foto");

class FotoContronller {
  async store(req, res) {
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      return res.json(req.file);
    });
  }
}

export default new FotoContronller();
