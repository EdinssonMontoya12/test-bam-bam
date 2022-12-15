const lote = {}

lote.esperado = {}
lote.enviar = {}

lote.enviar.insertar = {
    producto: 'Vdir',
    fechavenc: '2022-12-24',
    codigo: '1151901',
}

lote.esperado.insertar = {
    OSUCCESS: 1,
    OMENSAJE: "Se ha insertado correctamente el lote."
}

lote.esperado.consultar = {
    articuloid: 9,
    cantidad: 0,
    codigo: "1151901",
}

lote.esperado.eliminar = {
    algo: 'esperado',
}

module.exports = lote
