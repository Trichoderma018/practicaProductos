import {postProducts, getProducts, deleteProduct} from "../services/llamadosProductos.js"
const nombreProducto = document.getElementById("nombreProducto")
const precio = document.getElementById("precio")
const stock = document.getElementById("stock")
const agregar = document.getElementById("agregar")
const mostrarProducto = document.getElementById("mostrarProducto") //Este es el boton para mostrar productos
const mostrar = document.getElementById("mostrar") //Este es el div que muestra los productos

agregar.addEventListener("click", function () {
    postProducts(nombreProducto.value, precio.value, stock.value)
})

mostrarProducto.addEventListener("click", function (){
    MostrarProductos()
})

async function MostrarProductos() {
    
    const datos = await getProducts()
    
    for (let index = 0; index < datos.length; index++) {
        let div = document.createElement("div")
        div.innerText= datos[index].nombreProducto + " "+ datos[index].precio+ " "+ datos[index].stock
        mostrar.appendChild(div)
    }
}