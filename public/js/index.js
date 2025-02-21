import {postProducts} from "../services/llamadosProductos.js"
const nombreProducto = document.getElementById("nombreProducto")
const agregar = document.getElementById("agregar")

agregar.addEventListener("click", function () {
    postProducts(nombreProducto.value)
})