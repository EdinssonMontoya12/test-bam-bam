const fetch = require('node-fetch')
const host = require('../host')

const articulo = {}

articulo.insertar = async (sucid, articulo) => {

    articulo.sucid = sucid

    const response = await fetch(`${host.host}/articulo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articulo)
    }).then(data => data.json())
    
    return response
}

articulo.actualizar = async (articuloid, articulo) => {

    const response = await fetch(`${host.host}/articulo/${articuloid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articulo)
    }).then(data => data.json())

    return response
}

articulo.consultar = async (sucid, texto, activo) => {

    if (activo != 0) activo = 1

    const response = await fetch(`${host.host}/articulo/${sucid}/${texto}/${activo}`)
        .then(data => data.json())

    return response
}

articulo.eliminar = async (articuloid) => {
    const response = await fetch(`${host.host}/articulo/${articuloid}`, {
        method: 'DELETE',
    }).then(data => data.json())

    return response
}

articulo.activar = async (articuloid) => {

    const response = await fetch(`${host.host}/articulo/activar/${articuloid}`, {
        method: 'PUT',
    }).then(data => data.json())

    return response
}


articulo.consultarXid = async (articuloid) => {

    const response = await fetch(`${host.host}/articulo/${articuloid}`)
        .then(data => data.json())

    return response
}

module.exports = articulo