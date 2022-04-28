import React from 'react'
import {Carousel} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function carousel(){
    return( 
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tomassopizzas.com.ar/wp-content/uploads/2021/03/BannerWeb_Cupones-Rappi_Mesa-de-trabajo-1.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tomassopizzas.com.ar/wp-content/uploads/2020/11/Digitalizacion-2.png"
      alt=""
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tomassopizzas.com.ar/wp-content/uploads/2021/05/SlidesWeb_Tomasso_2021.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





    )
}
export default carousel;