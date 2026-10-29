//import productos from './productos.js'
import {productosMascotas} from './productos.js'


import {renderizadoProductos} from './funciones.js'

const botomEvento = document.getElementById('evento-boton')

const contenedorProductos = document.getElementById('contenedor-productos')

const dialogo = document.getElementById('dialogo')



renderizadoProductos(contenedorProductos, productosMascotas)




//eventos 

botomEvento.addEventListener('click',(evento)=>{
 // console.log(evento)
 dialogo.showModal()
})