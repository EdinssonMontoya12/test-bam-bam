const data = require('../Data/terceroData')
const terceroDao = require('../Dao/terceroDao')
const empresaprovData = require('../Data/empresaproveData')
const empresaprovDao = require('../Dao/empresaproveDao')

var idCli = ''
var id2Prov = ''
var empresaProvId = ''

describe('POST tercero', () => {
  test('Insertar Cliente', async () => {

    const response = await terceroDao.insertar(1, data.enviar.insertarCli)
    idCli = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.enviar)
      )
  })

  test('Insertar Proveedor', async () => {
    const empresaprov = await empresaprovDao.insertar(empresaprovData.enviar.insertar)
    empresaProvId = empresaprov.ID

    const response = await terceroDao.insertar(1, data.enviar.insertarProv)
    id2Prov = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.enviar)
      )
  })
})

describe('PUT tercero', () => {
  test('Actualizar tercero cliente', async () => {

    const response = await terceroDao.actualizar(idCli, data.enviar.actualizarCli)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizar)
      )
  })

  test('Actualizar tercero proveedor', async () => {

    const response = await terceroDao.actualizar(id2Prov, data.enviar.actualizarProv)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizar)
      )
  })
})

describe('GET proveedor', () => {
  test('Consultar cliente', async () => {

    const response = await terceroDao.consultarxId(idCli)

    expect(response.DATA[0]).toEqual
      (expect.objectContaining(
        data.esperado.consultarCli)
      )
  })

  test('Consultar proveedor', async () => {

    const response = await terceroDao.consultarxId(id2Prov)

    expect(response.DATA[0]).toEqual
      (expect.objectContaining(
        data.esperado.consultarProv)
      )
  })
})

describe('DELETE articulo', () => {
  test('Eliminar cliente', async () => {
    const response = await terceroDao.eliminar(idCli)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })

  test('Eliminar provedor', async () => {
    const response = await terceroDao.eliminar(id2Prov)

    await empresaprovDao.eliminar(empresaProvId)
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })
})