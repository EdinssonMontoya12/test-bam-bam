const empresaprove = {}

empresaprove.esperado = {}
empresaprove.enviar = {}

empresaprove.enviar.insertar = {
    nombre: 'VALEMP1',
    nit: '1151901115',
    sucid: 1,
    codigo: 'VALEMP'
}

empresaprove.enviar.actualizar = {
    nombre: 'VALEMP1',
    nit: '1151901115',
    sucid: 1,
    codigo: 'VALEMP2'
}

empresaprove.esperado.enviar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha insertado la empresa proveedora.',
}

empresaprove.esperado.eliminar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha eliminado le empresa proveedora.'
}

empresaprove.esperado.actualizar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se actualizo la empresa proveedora con exito.'
}

empresaprove.esperado.consultar = {
    codigo: "VALEMP2",
    nit: 1151901115,
    nombre: "VALEMP1",
    sucid: 1
}

module.exports = empresaprove