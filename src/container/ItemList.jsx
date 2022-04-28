import React, { useEffect, useState } from 'react';

import Item from './Item';
import './ContainerStyles/productos.css'
import { Link, useParams } from 'react-router-dom';
import { getFirestore,getDocs,collection,where,query } from 'firebase/firestore'
import { Button } from 'react-bootstrap';



const ItemList = () => {
  
  const [productos, traerProductos] = useState([]);



 
  const { categoriaId } = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    const queryFilter = query(queryCollection, where ('categoria', '==', categoriaId))
    getDocs(queryFilter)
    .then(resp=>traerProductos(resp.docs.map(item=> ({id: item.id, ...item.data()}))))
    
   
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
                <Button variant="dark">Detalle</Button>
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
