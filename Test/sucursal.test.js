const sucursalDao = require('../Dao/sucursalDao')
const data = require('../Data/sucursalData')

describe('POST empresa proveedora', () => {
  test('Insertar empresa proveedora', async () => {

    const response = await sucursalDao.insertar(data.enviar.insertar)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.insertar)
      )
  })
})