import { crearPago, obtenerPagos } from "../models/pagosModel.js";

export const procesarPago = (req, res) => {

    const { nombre, banco, monto } = req.body;

    if (!nombre || !banco || !monto) {
        return res.status(400).json({
            exito: false,
            mensaje: "Todos los campos son obligatorios"
        });
    }

    // 🔥 Simulación bancaria 80% éxito
    const aprobado = Math.random() < 0.8;

    const transaccion = "PSE" + Math.floor(Math.random() * 1000000);

    const nuevoPago = crearPago({
        nombre,
        banco,
        monto,
        estado: aprobado ? "Aprobado" : "Rechazado",
        transaccion
    });

    res.json({
        exito: aprobado,
        mensaje: aprobado
            ? "Pago aprobado por PSE"
            : "Pago rechazado por el banco",
        pago: nuevoPago
    });
};

export const listarPagos = (req, res) => {
    res.json(obtenerPagos());
};