const fetch = require('node-fetch');
const { facturacion, host } = require('../host')

const factura = {}

factura.insertar = async (factura) => {

    const response = await fetch(`${facturacion}/factura/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(factura)
    }).then(data => data.json())

    return response
}

factura.actualizar = async (facturaid, factura) => {

    const response = await fetch(`${facturacion}/factura/${facturaid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(factura)
    }).then(data => data.json())

    return response
}

factura.consultarXid = async (facturaid) => {

    const factura = await fetch(`${facturacion}/factura/${facturaid}`)
        .then(data => data.json())

    return factura
}

factura.asentar = async (facturaid) => {

    var date = new Date().toLocaleDateString('es-CO')
    date = date.replace('/', '-').replace('/', '-')

    const response = await fetch(`${facturacion}/factura/asentar/${facturaid}/${date}`, {
        method: 'PUT'
    }).then(data => data.json())

    return response;
}

factura.asentarCompra = async (facturaid) => {

    var date = new Date().toLocaleDateString('es-CO')
    date = date.replace('/', '-').replace('/', '-')

    const response = await fetch(`${facturacion}/factura/asentar/${facturaid}/${date}`, {
        method: 'PUT'
    }).then(data => data.json())

    return response;
}

factura.reversar = async (facturaid) => {

    const result = await fetch(`${facturacion}/factura/reversar/${facturaid}`)
        .then(data => data.json())

    return result
}

factura.reversarCompra = async (facturaid) => {

    const response = await fetch(`${facturacion}/factura/reversar/${facturaid}`)
        .then(data => data.json())

    return response;
}

factura.eliminar = async (facturaid) => {

    const response = await fetch(`${facturacion}/factura/${req.params.id}`,{
        method: 'DELETE',
    }).then(data => data.json())

    return response;
}

module.exports = factura