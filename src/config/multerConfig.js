import { extname, resolve } from "path";
import multer from "multer";

const aleatorio = () => Math.floor(Math.random() * 12000 + 20002);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Formato deve ser jpeg ou png."));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)} `);
    },
  }),
};
