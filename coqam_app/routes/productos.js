import express from "express";

import {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
} from "../controllers/productosControl.js";

const router = express.Router();

// OBTENER TODOS
router.get("/", getAllProductos);

// OBTENER POR ID
router.get("/:id", getProductoById);

// CREAR
router.post("/", createProducto);

// ACTUALIZAR
router.put("/:id", updateProducto);

// ELIMINAR
router.delete("/:id", deleteProducto);

export default router;