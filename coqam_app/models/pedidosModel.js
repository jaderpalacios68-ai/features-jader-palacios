let pedidos = [];

export const obtenerPedidos = () => pedidos;

export const obtenerPedidoPorId = (id) => {
    return pedidos.find(p => p.id === id);
};

export const crearPedido = (data) => {
    const nuevoPedido = {
        id: pedidos.length + 1,
        ...data,
        total: data.cantidad * data.precio
    };

    pedidos.push(nuevoPedido);
    return nuevoPedido;
};

export const eliminarPedido = (id) => {
    const index = pedidos.findIndex(p => p.id === id);
    if (index === -1) return null;

    return pedidos.splice(index, 1)[0];
};