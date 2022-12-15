const sucursal = {}

sucursal.enviar = {}
sucursal.esperado = {}

sucursal.enviar.insertar = {
    codigo: 'VALSUC',
    nombre: 'sucursal test',
    direccion: 'Av 9 Cll 36',
    telefono: '123465',
    email: 'sucursal@gmail.com'
}

sucursal.esperado.insertar = {
    OSUCCESS: 1,
    OMENSAJE: "Se ha insertado la sucursal"
}

module.exports = sucursal