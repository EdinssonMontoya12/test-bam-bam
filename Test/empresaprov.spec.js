const empresaproveDao = require('../Dao/empresaproveDao')
const data = require('../Data/empresaproveData')
var id = ''

describe('POST empresa proveedora', () => {
  test('Insertar empresa proveedora', async () => {

    const response = await empresaproveDao.insertar(data.enviar.insertar)
    id = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.enviar)
      )
  })
})

describe('PUT empresa proveedora', () => {
  test('Actualizar empresa proveedora', async () => {

    const response = await empresaproveDao.actualizar(id, data.enviar.actualizar)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizar)
      )
  })
})

describe('GET empresa proveedora', () => {
  test('Consultar empresa proveedora', async () => {

    const response = await empresaproveDao.consultarXid(id)

    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.consultar)
      )
  })
})

describe('DELETE empresa proveedora', () => {
  test('Eliminar empresa proveedora', async () => {
    const response = await empresaproveDao.eliminar(id)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })
})