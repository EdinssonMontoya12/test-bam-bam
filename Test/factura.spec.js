const facturadao = require('../Dao/facturaDao')
const data = require('../Data/facturacionData')
var idfv = ''
var idfc = ''

describe('POST factura', () => {
  test('Insertar factura venta', async () => {

    const response = await facturadao.insertar(data.enviar.insertarFV)
    idfv = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizarFV)
      )
  })

  test('Insertar factura compra', async () => {

    const response = await facturadao.insertar(data.enviar.insertarFC)
    idfc = response.ID
    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizarFV)
      )
  })
})

describe('PUT factura', () => {
  test('Actualizar factura venta', async () => {

    const response = await facturadao.actualizar(idfv, data.enviar.actualizarFV)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizarFV)
      )
  })

  test('Actualizar factura compra', async () => {

    const response = await facturadao.actualizar(idfc, data.enviar.actualizarFC)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.actualizarFV)
      )
  })
})

describe('GET factura', () => {
  test('Consultar factura venta', async () => {

    const response = await facturadao.consultarXid(idfv)

    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.insertarFV)
      )
  })

  test('Consultar factura compra', async () => {

    const response = await facturadao.consultarXid(idfc)

    expect(response.DATA).toEqual
      (expect.objectContaining(
        data.esperado.insertarFV)
      )
  })
})
/*
describe('DELETE factura venta', () => {
  test('Eliminar factura venta', async () => {
    const response = await empresaproveDao.eliminar(id)

    expect(response).toEqual
      (expect.objectContaining(
        data.esperado.eliminar)
      )
  })
})*/