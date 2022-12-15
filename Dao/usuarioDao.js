const fetch = require('node-fetch');
const { host } = require('../host')

const usuario = {}

usuario.consultarXid = async (userid) => {

    const response = await fetch(`${host}/usuario/${userid}`)
        .then(data => data.json())

    return response
}

usuario.insertar = async (usuario) => {

    const response = await fetch(`${host}/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    }).then( data => data.json())

    return response
}

usuario.desactivar = async (userid) => {

    const response = fetch(`${host}/usuario/${userid}`, {
        method: 'DELETE'
    }).then(data => data.json())

    return response
}

usuario.actualizar = async (userid, usuario) => {

    const response = fetch(`${host}/usuario/${userid}`, {
        method : 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    }).then( data => data.json())

    return response
}

module.exports = usuario