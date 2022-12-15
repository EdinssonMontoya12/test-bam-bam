const data = require('../Data/articuloData')
const articuloDao = require('../Dao/articuloDao')
const dataGrupo = require('../Data/grupoarticuloData')
const grupoDao = require('../Dao/grupoarticuloDao')

var id = ''
var grupoId = ''

describe('POST articulo', () => {
  test('Insertar articulo', async () => {
    const grupo = await grupoDao.insertar(1, dataGrupo.enviar.insertarParaArticu)
    grupoId = grupo.ID

    const response = await articuloDao.insertar(1, data.enviar.insertar)
    id = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.enviar)
      )
  })
})

describe('PUT articulo', () => {
  test('Actualizar articulo', async () => {

    const response = await articuloDao.actualizar(id, data.enviar.actualizar)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizar)
      )
  })
})

describe('GET articulo', () => {
  test('Consultar articulo', async () => {

    const response = await articuloDao.consultarXid(id)

    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.consultar)
      )
  })

  test('Consultar articulo inactivo', async () => {
    await articuloDao.activar(id)
    const response = await articuloDao.consultarXid(id)

    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.consultarInactivo)
      )
  })
})

describe('DELETE articulo', () => {
  test('Eliminar articulo', async () => {
    const response = await articuloDao.eliminar(id)

    await grupoDao.eliminar(grupoId)
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })
})