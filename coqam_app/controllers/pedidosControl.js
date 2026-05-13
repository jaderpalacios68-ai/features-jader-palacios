import {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    eliminarPedido
} from "../models/pedidosModel.js";

export const listarPedidos = (req, res) => {
    res.json(obtenerPedidos());
};

export const obtenerPedido = (req, res) => {
    const id = parseInt(req.params.id);
    const pedido = obtenerPedidoPorId(id);

    if (!pedido) {
        return res.status(404).json({
            mensaje: "Pedido no encontrado"
        });
    }

    res.json(pedido);
};

export const crearNuevoPedido = (req, res) => {
    const { cliente, producto, cantidad, precio } = req.body;

    if (!cliente || !producto || !cantidad || !precio) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    const nuevoPedido = crearPedido({
        cliente,
        producto,
        cantidad,
        precio
    });

    res.status(201).json(nuevoPedido);
};

export const eliminarPedidoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const pedidoEliminado = eliminarPedido(id);

    if (!pedidoEliminado) {
        return res.status(404).json({
            mensaje: "Pedido no encontrado"
        });
    }

    res.json({
        mensaje: "Pedido eliminado correctamente"
    });
};