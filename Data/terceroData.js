const empresaprove = {}

empresaprove.esperado = {}
empresaprove.enviar = {}

empresaprove.enviar.insertarCli = {
    identificacion: '165548',
    nombre: 'VALCLI',
    codigo: 'VALCLI165',
    codtipo: 'CLI',
    codempresaprod: '',
    apellido: 'VALCLI548',
    correo: 'val@gmail.com',
    telefono: '1234567890'
}

empresaprove.enviar.insertarProv = {
    identificacion: '1655481',
    nombre: 'VALPROV',
    codigo: 'VALPROV165',
    codtipo: 'PROV',
    codempresaprod: 'VALEMP',
    apellido: 'VALPROV548',
    correo: 'valprov@gmail.com',
    telefono: '1234567890'
}

empresaprove.enviar.actualizarCli = {
    identificacion: '165548',
    nombre: 'VALCLI',
    codigo: 'VALCLI1651',
    codtipo: 'CLI',
    codempresaprod: '',
    apellido: 'VALCLI548',
    correo: 'val@gmail.com',
    telefono: '1234567890'
}

empresaprove.enviar.actualizarProv = {
    identificacion: '1655481',
    nombre: 'VALPROV',
    codigo: 'VALPROV16',
    codtipo: 'PROV',
    codempresaprod: 'VALEMP',
    apellido: 'VALPROV548',
    correo: 'valprov@gmail.com',
    telefono: '1234567890'
}

empresaprove.esperado.enviar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha incertado el tercero.',
}

empresaprove.esperado.eliminar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se ha eliminado el tercero.'
}

empresaprove.esperado.actualizar = {
    OSUCCESS: 1,
    OMENSAJE: 'Se actualizo el tercero con exito.'
}

empresaprove.esperado.consultarCli = {
    apellido: "VALCLI548",
    codTipoTer: "CLI",
    codigo: "VALCLI1651",
    correo: "val@gmail.com",
    identificacion: 165548,
    nombre: "VALCLI",
    sucid: 1,
    telefono: "1234567890",
}

empresaprove.esperado.consultarProv = {
    apellido: "VALPROV548",
    codTipoTer: "PROV",
    codigo: "VALPROV16",
    correo: "valprov@gmail.com",
    identificacion: 1655481,
    nombre: "VALPROV",
    sucid: 1,
    telefono: "1234567890",
}

module.exports = empresaprove