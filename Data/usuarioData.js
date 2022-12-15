const usuario = {}

usuario.esperado = {}
usuario.enviar = {}

usuario.enviar.insertar = {
    username: 'Pepe',
    radio1: 'AUX',
    nombre: 'Pepe',
    apellido: 'Gutiertez',
    telefono: '3124575891',
    sucursal: 'Nedw',
    email: 'pepe@example.com',
    contrasenia: '1234'
}

usuario.enviar.actualizar =  {
    username: 'Pepe',
    radio1: 'ADMIN',
    nombre: 'Pepe',
    apellido: 'Gutiertez Vargas',
    telefono: '3124575891',
    sucursal: 'Fsde',
    email: 'pepe@example.com',
    contrasenia: '1234'
}

usuario.esperado.insertar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha insertado un nuevo usuario'
}

usuario.esperado.actualizar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha actualizado el usuario'
}

usuario.esperado.consultar = {
    CODROL: "ADMIN",
    SUCCOD: "Fsde",
    activo: 1,
    apellido: "Gutiertez Vargas",
    email: "pepe@example.com",
    nombre: "Pepe",
    telefono: "3124575891",
    username: "Pepe",
}

usuario.esperado.eliminar = {
    OSUCCESS: 1
}

module.exports = usuario