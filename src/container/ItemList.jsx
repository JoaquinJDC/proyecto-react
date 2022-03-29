import React, { useEffect, useState } from 'react';
import { getFetch,ListaDeProductos } from '../data/data';
import Item from './Item';
import './ContainerStyles/ListaDeProducto.css'
import { Link, NavLink, useParams } from 'react-router-dom';



const ItemList = () => {
  
  const [producto, setProductos] = useState([]);



 
  const {categoriaId} = useParams()
  console.log(categoriaId)
  
  useEffect (() => {
    if(categoriaId){
    getFetch
    .then(resp => setProductos(resp.filter(Item.categoria === categoriaId)))
    .catch(err => console.log(err))
  }else{
    getFetch
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
  }
  }, [])

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
                      categoria={producto.categoria}
                      imagen={producto.imagen}
                      precio={producto.precio}
                      cantidad={producto.cantidad}
                    
                    />
                 <Link to = {`/detalle/${producto.id}`}>
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
