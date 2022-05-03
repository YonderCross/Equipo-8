//Variables
const  grid = document.querySelector(".accessories__grid");
const shoppingCar = document.querySelector(".shopping-car img");
let articulosCarrito = [];

function cargarEventListeners(){
    grid.addEventListener("click", agregarArticulo);   // <-- Ready for any click event
    shoppingCar.addEventListener("mouseover", saludar)
}

function agregarArticulo(e){
    e.preventDefault();
    if(e.target.classList.contains("buy__button")){       // <-- Cerciora que se ha hecho click en el boton de comprar
        const articuloSeleccionado = e.target.parentElement.parentElement;   // <-- Accede al elemento padre padre que es el contenedor de todo el articulo
        leerDatos(articuloSeleccionado);   // <-- Llama al método leer datos y le pasa por argumento el articulo seleccionado
    }

}
function leerDatos(articulo){
    const infoArticulo = {     // <-- Construye un objeto con la informacion del articulo
        imagen: articulo.querySelector(".accesory__picture").src,
        nombre: articulo.querySelector(".accessory__name").textContent,
        precio: articulo.querySelector(".accessory__price span").textContent,
        color: articulo.querySelector(".accesory__color").value,
        tamano: articulo.querySelector("accesory__tamano").valor,
        cantidad: 1
    }
    articulosCarrito = [...articulosCarrito, infoArticulo]; // <-- Al array de articulos le asigna el nuevo articula más la referencia anterior del array
    construirCarritoHTML();
}
function construirCarritoHTML(){
    articulosCarrito.forEac( (articulo)=>{
       const {imagen, nombre, precio, color} = articulo;
       const tableRow = document.createElement("tr");
       tableRow.innerHTML = `
            
       `; 

    });

}
function saludar(){
   

}

cargarEventListeners();