const grupo = {}

grupo.esperado = {}
grupo.enviar = {}

grupo.enviar.insertar = {
    codigo: 'GRUPVAL',
    descri: 'Valiando'
}

grupo.enviar.insertarParaArticu = {
    codigo: 'GRUPVAL1',
    descri: 'Valiando'
}

grupo.enviar.actualizar = {
    codigo: 'GRUPVAL',
    descri: 'Valiando 2'
}

grupo.esperado.insertar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha insertado el grupo de articulos',
}

grupo.esperado.eliminar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha eliminado el grupo de articulos',
}

grupo.esperado.actualizar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha actualizado el grupo de articulos',
}

grupo.esperado.consultar = {
    codigo: "GRUPVAL",
    descripcion: "Valiando 2",
    sucid: 1,
}
module.exports = grupo