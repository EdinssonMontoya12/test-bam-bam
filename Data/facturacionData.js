const factura = {}

factura.enviar = {}
factura.esperado = {}

factura.enviar.insertarFV = {
    codigofact: 'FV',
    numero: 99,
    fecha: '2022-12-24',
    fechasent: '',
    tercero: 'Rupert Acevedo',
    codtercero: 'Rupert',
    user: 'ADMIN',
    observacion: 'Se insertar factura venta de validacion',
    sucid: 1,
    total: 52000,
    detalle: []
}

factura.enviar.insertarFC = {
    codigofact: 'FC',
    numero: 99,
    fecha: '2022-12-24',
    fechasent: '',
    tercero: 'Thad Alfaro',
    codtercero: 'Thad',
    user: 'ADMIN',
    observacion: 'Se insertar factura compra de validacion',
    sucid: 1,
    total: 52000,
    detalle: []
}

factura.enviar.actualizarFV = {
    tercero: 'Rupert Acevedo',
    codtercero: 'Rupert',
    observacion: 'Actualizacion',
    sucid: 1,
    total: 50000,
    detalle: [],
    detalleDelete: []
}

factura.enviar.actualizarFC = {
    tercero: 'Thad Alfaro',
    codtercero: 'Thad',
    observacion: 'Actualizacion',
    sucid: 1,
    total: 50000,
    detalle: [],
    detalleDelete: []
}

factura.esperado.insertarFV = {
    OSUCCESS: 1,
    OMENSAJE: "Se ha insertado la factura sin detalle"
}

factura.esperado.actualizarFV = {
    OSUCCESS: 0
}

module.exports = factura