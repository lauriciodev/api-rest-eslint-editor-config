import { extname, resolve } from "path";
import multer from "multer";

const destino = resolve(__dirname, "..", "..", "uploads", "images");

export default {
  storage: multer.diskStorage({
    destination: destino,
    /* filename: (req, file, cb) => {
      cb(
        null,
        `${Date.now()}_${file.originalname}${extname(file.originalname)} `
      );
    }, */
  }),
};

/*
fileFilter: (req, file, cb) => {
  if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
    return cb(new multer.MulterError("Formato deve ser jpeg ou png."));
  }
  return cb(null, true);
}, */

/* const aleatorio = () => Math.floor(Math.random() * 12000 + 20002); */
