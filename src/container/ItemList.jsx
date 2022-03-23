import React, { useEffect, useState } from 'react';
import { ListaDeProductos } from '../data/data';
import Item from './Item';
import './ContainerStyles/ListaDeProducto.css'


const ItemList = () => {
  
  const [producto, setProductos] = useState([]);


  const getProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ListaDeProductos);
    }, 2000);
  });


  const ProductosLista = async () => {
    try {
      const result = await getProducto;
      setProductos(result);
    } catch (error) {
      console.log(error);
      alert('No hay productos');
    }
  };

  
  useEffect(() => {
    ProductosLista();
  }, []);

  return (
    <div>
      {
      
        producto.length ? ( 
          <>
            {
             
              producto.map((producto) => {
                
                return (
                  <div className='producto' key={producto.id}>
                    <Item
                      nombre={producto.nombre}
                      imagen={producto.imagen}
                      precio={producto.precio}
                      cantidad={producto.cantidad}
                    
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;
