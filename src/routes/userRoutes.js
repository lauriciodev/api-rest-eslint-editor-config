import { Router } from "express";
import UserController from "../controllers/UserController";

const router = new Router();

router.post("/", UserController.store);

export default router;

/*
index => lista todos os usuarios  => get
store/create => cria um novo usuario => post
delete => apaga um usuario => delete
show => mostra um usuario  => get
update => atualiza usuario => patch / put
*/
