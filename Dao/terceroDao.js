const fetch = require('node-fetch');
const { host } = require('../host')

const tercero = {}

tercero.consultar = async (sucid, texto, tiporter) => {

    const tercero = await fetch(`${host}/tercero/${sucid}/${texto}/${tiporter}`)
        .then(data => data.json())

    return tercero
}

tercero.insertar = async (sucid, terceroins) => {

    terceroins.sucid = sucid

    const response = await fetch(`${host}/tercero`, {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(terceroins)
    }).then(data => data.json())

    return response
}

tercero.actualizar = async (id, terceroins) => {

    const response = await fetch(`${host}/tercero/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(terceroins)
    }).then(data => data.json())

    return response
}

tercero.consultarxId = async (id) => {

    const response = await fetch(`${host}/tercero/${id}`)
        .then(data => data.json())

    return response
}

tercero.eliminar = async (id) => {

    const response = await fetch(`${host}/tercero/${id}`,{
        method: 'DELETE'
    }).then(data => data.json())

    return response
}

module.exports = tercero