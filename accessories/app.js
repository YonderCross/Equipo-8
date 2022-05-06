//Variables
const  grid = document.querySelector(".accessories__grid");
const shoppingCar = document.querySelector(".carrito__img");
const tablaCarrito = document.querySelector(".carrito__tabla tbody");
const divCarrito = document.querySelector(".carrito");
const botonVaciar = document.querySelector("#vaciar");
const botonComprar = document.querySelector("comprar");
let articulosCarrito = [];

function cargarEventListeners(){
    grid.addEventListener("click", agregarArticulo);   // <-- Ready for any click event
    shoppingCar.addEventListener("mouseover", () => {
       divCarrito.style.transform = "scale(1)";
    });
    shoppingCar.addEventListener("mouseout",  () => {
        divCarrito.style.transform = "scale(0)";
    });
    divCarrito.addEventListener("mouseover", ()=>{
        divCarrito.style.transform = "scale(1)";
        divCarrito.classList.add("carrito__aspecto")
    });
    divCarrito.addEventListener("mouseout", ()=>{
        divCarrito.style.transform = "scale(0)";
    });
    botonVaciar.addEventListener("click", vaciarCarrito);
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
        cantidad: 1
    }
    articulosCarrito = [...articulosCarrito, infoArticulo]; // <-- Al array de articulos le asigna el nuevo articula más la referencia anterior del array
    construirCarritoHTML();
}
function construirCarritoHTML(){
    clearHTML();  // <-- Llama a la función clear para eliminar los elementos previos de la tabla
    articulosCarrito.forEach( (articulo)=>{   // <-- Del array de articulos iteramos y con cada informacion de cada elemento construimos una tabla
       const {imagen, nombre, precio, color, cantidad} = articulo;
       const tableRow = document.createElement("tr");    // <-- Crea el html que se insertara dentro de la tabla
       tableRow.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${color}</td>
            <td>${cantidad}</td>
            
       `;
       console.log(tableRow.parentElement);
       tablaCarrito.appendChild(tableRow);  // <--Ya creado el html lo inserta en la tabla
    });

}
function saludar(){
    console.log("Saludar");

}
function clearHTML(){  // <-- Elimina los elementos existentes en el div de los articulos para evitar que se repitan
    while(tablaCarrito.firstChild){
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}
function vaciarCarrito(){
    clearHTML();
    articulosCarrito = [];
}

cargarEventListeners();