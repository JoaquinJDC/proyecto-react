export const ListaDeProductos = [
{

    nombre: 'Pizza Mozarella',
    precio: 480,
    imagen:
      'https://tomassopizzas.com.ar/wp-content/uploads/2021/01/Muzza_caliente-1.png',
    cantidad: 50,
    id: 1,
  },
  {
    nombre: 'Pizza Fugazzeta',
    precio: 590,
    imagen:
      'https://tomassopizzas.com.ar/wp-content/uploads/2020/06/Fugazzetav2-Baja-Web.jpg',
    cantidad: 20,
    id: 2,
  },
  {
    nombre: 'Pizza calabresa',
    precio: 700,
    imagen:'https://tomassopizzas.com.ar/wp-content/uploads/2019/12/Calabresa-Baja-Web.jpg' ,
     
    cantidad: 30,
    id: 3,
  },
  {
    nombre: 'Pizza Doble Muzza',
    precio: 610,
    imagen:'https://tomassopizzas.com.ar/wp-content/uploads/2021/01/DobleMuzza_caliente-copia.png' ,
     
    cantidad: 30,
    id: 4,
  },
  {
    nombre: 'Pizza Napolitana',
    precio: 660,
    imagen:'https://tomassopizzas.com.ar/wp-content/uploads/2019/12/Napolitana-Baja-Web.jpg' ,
     
    cantidad: 30,
    id: 5,
  },
  {
    nombre: 'Pizza Rucula',
    precio: 710,
    imagen:'https://tomassopizzas.com.ar/wp-content/uploads/2019/12/Rucula-Baja-Web.jpg' ,
     
    cantidad: 30,
    id: 6,
  },
  {
    nombre: 'Pizza Cuatro queso',
    precio: 770,
    imagen:'https://tomassopizzas.com.ar/wp-content/uploads/2020/05/CuatroQuesos-Baja-Web.jpg' ,
     
    cantidad: 30,
    id: 7,
  },
  {
    nombre: 'Pizza Jamon',
    precio: 770,
    imagen:'http://tomassopizzas.com.ar/wp-content/uploads/2019/12/Jamon-Baja-Web.jpg' ,
     
    cantidad: 30,
    id: 8,
  },
  {
    nombre: 'Pizza Jamon y Morron',
    precio: 770,
    imagen:'http://tomassopizzas.com.ar/wp-content/uploads/2021/01/JamonyMorron-Baja-Web_plus.jpg' ,
     
    cantidad: 30,
    id: 9,
  },
];

export const getFetch = new Promise ((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(ListaDeProductos)
    }, 3000)
  } else {
    reject ('400 not found')
}
})