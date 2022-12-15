const fetch = require('node-fetch');
const {host}= require('../host')
 
const sucursal = {};

sucursal.insertar = async (sucursal) => {

    const response = await fetch(`${host}/sucursal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sucursal)
    }).then( data => data.json())

    return response
}

module.exports = sucursal