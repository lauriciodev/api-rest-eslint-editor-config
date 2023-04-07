import { Router } from "express";
import UserController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// não deveria existir
// router.get("/", loginRequired, UserController.index); // lista usuarios
// router.get("/:id", UserController.show); // lista usuario

// router.post("/", UserController.store); // criar usuario

// router.put("/", loginRequired, UserController.update); // editar usuario
// router.delete("/", loginRequired, UserController.delete); // deletar usuario

export default router;

/*
index => lista todos os usuarios  => get
store/create => cria um novo usuario => post
delete => apaga um usuario => delete
show => mostra um usuario  => get
update => atualiza usuario => patch / put
*/
