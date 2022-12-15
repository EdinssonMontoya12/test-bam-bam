const usuarioDao = require('../Dao/usuarioDao')
const data = require('../Data/usuarioData')
var id = ''

describe('POST usuario', () => {
    test('Insertar usuario', async () => {

        const response = await usuarioDao.insertar(data.enviar.insertar)
        id = response.ID
        expect(response).toEqual
            (expect.objectContaining(
                data.esperado.insertar)
            )
    })
})

describe('PUT usuario', () => {
  test('Actualizar usuario', async () => {
 
    const response = await usuarioDao.actualizar(id, data.enviar.actualizar)
 
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizar)
      )
  })
})
 
describe('GET usuario', () => {
  test('Consultar usuario', async () => {
 
    const response = await usuarioDao.consultarXid(id)
 
    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.consultar)
      )
  })
})
 
describe('DELETE usuario', () => {
  test('Desactivar usuario', async () => {
    const response = await usuarioDao.desactivar(id)
    
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })
})