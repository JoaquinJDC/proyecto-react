import React, { useEffect, useState } from 'react';
import { getFetch } from '../data/data';
import Item from './Item';
import './ContainerStyles/productos.css'
import { Link, useParams } from 'react-router-dom';



const ItemList = () => {
  
  const [productos, setProductos] = useState([]);



 
  const { categoriaId } = useParams()
  console.log(categoriaId)
  useEffect(() => {
    
    if(categoriaId) {
    getFetch
    .then(resp => setProductos(resp.filter(Item => Item.categoria === categoriaId)))
    .catch(err => console.log(err))
  }else{
    getFetch
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
  }
  }, [categoriaId])

  return (
    <div>
      {
      
        productos.length ? ( 
          <>
            {
             
              productos.map((productos) => {
                
                return (
                  <div className='producto' key={productos.id}>
                    <Item
                      
                      nombre={productos.nombre}
                      imagen={productos.imagen}
                      precio={productos.precio}
                      cantidad={productos.cantidad}
                      
                    
                    />
                 <Link to = {`/detalle/${productos.id}`}>
                <button>
                    detalle
                </button>
                </Link> 
                 
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
