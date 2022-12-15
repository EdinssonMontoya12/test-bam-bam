const fetch = require('node-fetch')
const host = require('../host')

const empresa = {}

empresa.insertar = async (empresa) => {

    const response = await fetch(`${host.host}/empresaProv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(empresa)
    }).then(data => data.json())

    return response
}

empresa.consultarXid = async (empresaid) => {

    const response = await fetch(`${host.host}/empresaProv/${empresaid}`)
        .then(data => data.json())
        
    return response
}

empresa.actualizar = async (empresaid, empresa) => {

    const response = await fetch(`${host.host}/empresaProv/${empresaid}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(empresa)
    }).then(data => data.json())

    return response
}

empresa.eliminar = async (empresaid) => {

    const response = await fetch(`${host.host}/empresaProv/${empresaid}`, {
        method: 'DELETE',
    }).then(data => data.json())

    return response
}

module.exports = empresa