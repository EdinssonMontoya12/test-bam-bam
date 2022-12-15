const lotedao = require('../Dao/loteDao')
const data = require('../Data/loteData')
var id = ''

describe('POST lote', () => {
    test('Insertar lote', async () => {

        const response = await lotedao.insertar(1, data.enviar.insertar)
        id = response.ID
        expect(response).toEqual
            (expect.objectContaining(
                data.esperado.insertar)
            )
    })
})

describe('GET lote', () => {
    test('Consultar lote', async () => {

        const response = await lotedao.consultarXid(id)

        expect(response.DATA[0]).toEqual
            (expect.objectContaining(
                data.esperado.consultar)
            )
    })
})