import express from "express";
import { procesarPago, listarPagos } from "../controllers/pagosControl.js";

const router = express.Router();

// POST → Procesar pago
router.post("/", procesarPago);

// GET → Ver pagos realizados
router.get("/", listarPagos);

export default router;