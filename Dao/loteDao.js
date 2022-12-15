const fetch = require('node-fetch');
const {host} = require('../host')

const lote = {}

lote.eliminar = async (id) => {

    const response = await fetch(`${host}/lote/${id}`, {
        method: 'DELETE',
    }).then(data => data.json())

    return response
}

lote.consultarXid = async (id) => {

    const response = await fetch(`${host}/lote/${id}`)
        .then(data => data.json())

    return response
}

lote.insertar = async (sucid, lote) => {

    lote.sucid = sucid

    const response = await fetch(`${host}/lote`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(lote)
    }).then(data => data.json())

    return response
}

module.exports = lote