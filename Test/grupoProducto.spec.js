const grupoDao = require('../Dao/grupoarticuloDao')
const data = require('../Data/grupoarticuloData')
var id = ''

describe('Test grupo de productos', () => {
  describe('POST grupoProducto', () => {
    test('Insertar Grupo producto', async () => {

      const response = await grupoDao.insertar(1, data.enviar.insertar)
      id = response.ID
      expect(response).toEqual
        (expect.objectContaining(
          data.esperado.insertar)
        )
    })
  })

  describe('PUT grupoProducto', () => {
    test('Actualizar grupo producto', async () => {

      const response = await grupoDao.actualizar(id, data.enviar.actualizar)

      expect(response).toEqual
        (expect.objectContaining(
          data.esperado.actualizar)
        )
    })
  })

  describe('GET grupoProducto', () => {
    test('Consultar grupo producto', async () => {

      const response = await grupoDao.consultarXid(id)

      expect(response.DATA).toEqual
        (expect.objectContaining(
          data.esperado.consultar)
        )
    })
  })

  describe('DELETE grupoProducto', () => {
    test('Eliminar grupo producto', async () => {

      const response = await grupoDao.eliminar(id)

      expect(response).toEqual
        (expect.objectContaining(
          data.esperado.eliminar)
        )
    })
  })
})