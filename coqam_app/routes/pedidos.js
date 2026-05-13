import express from "express";
import {
    listarPedidos,
    obtenerPedido,
    crearNuevoPedido,
    eliminarPedidoPorId
} from "../controllers/pedidosControl.js";

const router = express.Router();

router.get("/", listarPedidos);
router.get("/:id", obtenerPedido);
router.post("/", crearNuevoPedido);
router.delete("/:id", eliminarPedidoPorId);

export default router;