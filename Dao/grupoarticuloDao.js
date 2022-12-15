const fetch = require('node-fetch');
const host = require('../host')

const grupo = {}

grupo.consultar = async (sucid, texto) => {

    const response = await fetch(`${host.host}/grupoProduto/${sucid}/${texto}`)
        .then(data => data.json())

    return response
}

grupo.consultarXid = async (grupoid) => {

    const response = await fetch(`${host.host}/grupoProduto/${grupoid}`)
        .then(data => data.json())

    return response
}

grupo.insertar = async (sucid, grupo) => {

    grupo.sucid = sucid

    const response = await fetch(`${host.host}/grupoProduto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(grupo)
    }).then(data => data.json())

    return response
}

grupo.eliminar = async (grupoid) => {

    const response = await fetch(`${host.host}/grupoProduto/${grupoid}`, {
        method: 'DELETE',
    }).then(data => data.json())

    return response
}

grupo.actualizar = async (grupoid, grupo) => {

    const response = await fetch(`${host.host}/grupoProduto/${grupoid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grupo)
    }).then( data => data.json())

    return response
}

module.exports = grupo