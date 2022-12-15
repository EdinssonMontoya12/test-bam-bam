const fetch = require('node-fetch');
const host = require('../host')

const login = {}

login.signin = async (user) => {

    const response = await fetch(`${host.host}/usuario/signin/${user.username}/${user.contrasenia}`)
        .then(data => data.json())

    return response

}

module.exports = login