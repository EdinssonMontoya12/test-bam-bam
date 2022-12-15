const login = {}

login.esperado = {}
login.enviar = {}

login.enviar.signin = {
    username: 'ADMIN',
    contrasenia: '1234'
}

login.enviar.signinFail = {
    username: 'ADMIN',
    contrasenia: '12345'
}

login.esperado.signin = {
    OSUCCESS: 1
}

login.esperado.signinFail = {
    OSUCCESS: 0
}

module.exports = login