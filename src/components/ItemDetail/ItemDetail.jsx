import React from 'react'

function ItemDetail({Productos}) {
  return (
    <>
    <div>{Productos.nombre}</div>
    <div>{Productos.categoria}</div>
    <div>{Productos.precio}</div>
    <div>{Productos.cantidad}</div>

    </>
  )
}

export default ItemDetail
