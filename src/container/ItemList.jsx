import React, { useEffect, useState } from 'react';
import { getFetch } from '../data/data';
import Item from './Item';
import './ContainerStyles/productos.css'
import { Link, useParams } from 'react-router-dom';
import { getFirestore,doc,getDocs,collection,where,query } from 'firebase/firestore'




const ItemList = () => {
  
  const [productos, setProductos] = useState([]);



 
  const { categoriaId } = useParams()
  console.log(categoriaId)
  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    const queryFilter = query(queryCollection, where ('categoria', '==', categoriaId))
    getDocs(queryFilter)
    .then(resp=>setProductos(resp.docs.map(item=> ({id: item.id, ...item.data()}))))
    
   
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
