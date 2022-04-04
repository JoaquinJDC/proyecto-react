import React from 'react';
import './ContainerStyles/productos.css'

const Item = ({ nombre, imagen, categoria, precio, id }) => {
 

  return (
    <article >
      <img className='imagen'  src={imagen} alt="" />
      <h6 >{categoria}</h6>
      <h3 >{nombre}</h3>
      <span >${precio}</span>
      <h6 >{id}</h6>

      
    </article>
  );
};

export default Item;
