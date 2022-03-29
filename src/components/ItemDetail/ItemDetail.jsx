import React from 'react'

function ItemDetail({productos}) {
  return (
    <>
    <div>{productos.nombre}</div>
    <div>{productos.categoria}</div>
    <div>{productos.precio}</div>
    <div>{productos.cantidad}</div>

    </>
  )
}

export default ItemDetail
