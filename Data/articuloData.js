const articulo = {}

articulo.esperado = {}
articulo.enviar = {}

articulo.enviar.insertar = {
    codigo: 'VAL',
    preciov: 15000,
    precioc: 20000,
    radio1: 0,
    cantidad: 0,
    nombre: 'VAL1',
    cantmax: 40,
    cantmin: 5,
    selectGrupo: 'GRUPVAL1'
}

articulo.enviar.actualizar = {
    codigo: 'VAL',
    preciov: 20000,
    precioc: 25000,
    radio1: 0,
    cantidad: 0,
    nombre: 'VAL2',
    cantmax: 40,
    cantmin: 5,
    selectGrupo: 'GRUPVAL1'
}

articulo.esperado.enviar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha insertado el articulo',
}

articulo.esperado.eliminar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha eliminado el articulo.'
}

articulo.esperado.actualizar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se actualizo en producto con exito.'
}

articulo.esperado.consultar = {
    CODART: "GRUPVAL1",
    activo: 1,
    cantidad: 0,
    cantmax: 40,
    cantmin: 5,
    cantpack: 0,
    codigo: "VAL",
    comprapack: 0,
    nombre: "VAL2",
    precioc: 25000,
    preciov: 20000,
    sucid: 1
}

articulo.esperado.consultarInactivo = {
    CODART: "GRUPVAL1",
    activo: 0,
    cantidad: 0,
    cantmax: 40,
    cantmin: 5,
    cantpack: 0,
    codigo: "VAL",
    comprapack: 0,
    nombre: "VAL2",
    precioc: 25000,
    preciov: 20000,
    sucid: 1
}
module.exports = articulo