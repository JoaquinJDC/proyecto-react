import React from 'react';
import ItemCount from './ItemCount';


const Item = ({ nombre, imagen, precio, id, cantidad }) => {
  const Anadir = (stock) => {
    alert(`Has agregado ${stock} productos al carrito!`);
  };

  return (
    <article >
      <img  src={imagen} alt="" />

      <h3 >{nombre}</h3>
      <span >${precio}</span>

      <ItemCount cantidad={cantidad} Anadir={Anadir} initial={0} />
    </article>
  );
};

export default Item;