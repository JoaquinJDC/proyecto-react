import React from 'react'

function ItemDetail({productos}) {
  return (
    <>
    <div>{productos.nombre}</div>
    <div>${productos.precio}</div>
    <div>Cantidad={productos.cantidad}</div>

    </>
  )
}

export default ItemDetail
