let pagos = [];

export const crearPago = (data) => {
    const nuevoPago = {
        id: pagos.length + 1,
        nombre: data.nombre,
        banco: data.banco,
        monto: data.monto,
        estado: data.estado,
        transaccion: data.transaccion,
        fecha: new Date()
    };

    pagos.push(nuevoPago);
    return nuevoPago;
};

export const obtenerPagos = () => {
    return pagos;
};