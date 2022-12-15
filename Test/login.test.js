const data = require('../Data/loginData')
const loginDao = require('../Dao/loginDao')

describe('GET signin', () => {
    test('Iniciar sesion', async () => {
  
      const response = await loginDao.signin(data.enviar.signin)

      expect(response).toEqual
        (expect.objectContaining(
          data.esperado.signin)
        )
    })

    test('Iniciar sesion fallo', async () => {
  
        const response = await loginDao.signin(data.enviar.signinFail)
  
        expect(response).toEqual
          (expect.objectContaining(
            data.esperado.signinFail)
          )
      })
})