//Variables
const body = document.querySelector("body");
const  grid = document.querySelector(".accessories__grid");
const shoppingCar = document.querySelector(".carrito__img");
const tablaCarrito = document.querySelector(".carrito__tabla tbody");
const divCarrito = document.querySelector(".carrito");
const botonVaciar = document.querySelector("#vaciar");
const botonComprar = document.querySelector("#comprar");
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
    tablaCarrito.addEventListener("click", eliminarArticulo);
    botonVaciar.addEventListener("click", vaciarCarrito);
    botonComprar.addEventListener("click", mostrarVentana);
    document.addEventListener("DOMContentLoaded", ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
        construirCarritoHTML();
    });
}

function agregarArticulo(e){
    
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
        id: articulo.querySelector(".buy__button").getAttribute("data-id"),
        cantidad: 1
    }
    const existe = articulosCarrito.some( articulo =>{   // <-- El método some de clase array itera sobre un array y verifica que el elemento en turno del array cumpla con cierta condición. Si se cumple devuelve un true
        return articulo.id === infoArticulo.id;
    });
    if(existe){   
        console.log("Ya existe");
        const articulosExistentes = articulosCarrito.map( articulo=>{
            if(articulo.id === infoArticulo.id){
                articulo.cantidad++;
                return articulo;
            }
            else{
                return articulo;
            }
        });
            articulosCarrito = [...articulosExistentes]
    }
    else{
        articulosCarrito = [...articulosCarrito, infoArticulo];  // <-- Al array de articulos le asigna el nuevo articula más la referencia anterior del array
    }
    construirCarritoHTML();
}
function construirCarritoHTML(){
    clearHTML();  // <-- Llama a la función clear para eliminar los elementos previos de la tabla
    articulosCarrito.forEach( (articulo)=>{   // <-- Del array de articulos iteramos y con cada informacion de cada elemento construimos una tabla
       const {imagen, nombre, precio, color, cantidad, id} = articulo;
       const tableRow = document.createElement("tr");    // <-- Crea el html que se insertara dentro de la tabla
       tableRow.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${nombre}</td>
            <td>$${precio}</td>
            <td>${color}</td>
            <td>${cantidad}</td>
            <td><a class="carrito__eliminar" href="#" data-id="${id}">x</a></td>
       `;
       tablaCarrito.appendChild(tableRow);  // <--Ya creado el html lo inserta en la tabla
    });
    sincronizarLocalStorage();
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
function eliminarArticulo(e){
    if(e.target.classList.contains("carrito__eliminar")){
        
        const articuloAEliminar = e.target.getAttribute("data-id");
        articulosCarrito = articulosCarrito.filter( articulo=> articulo.id !== articuloAEliminar);
        construirCarritoHTML();
    }
}
function mostrarVentana(){
    const overlay = document.createElement("div");
    const overlaySecundario = document.createElement("div");
    overlay.classList.add("overlay");
    overlaySecundario.classList.add("overlay__comprar");
    overlaySecundario.innerHTML = `
        <h2 class="overlay__header">Finalizar Compra</h2>
        <div class="overlay__contenido">
            
            <div class="overlay__cesta">
                <h3 class="overlay__subtitulo">Su Cesta</h3>    
                <div class="overlay__productos">
                    

                </div>
            </div>
            <div class="overlay__resumen">
                <h3 class="overlay__subtitulo">Resumen del pedido</h3>
                <div class="overlay__total">
                    
                </div>
            </div>
        </<div>    
    `;
    overlay.appendChild(overlaySecundario);
    const botonCerrar = document.createElement('p');
    botonCerrar.textContent = "X";
    botonCerrar.classList.add('btn-cerrar');
    botonCerrar.addEventListener("click", ()=>{
        overlay.remove();
    });
    overlay.appendChild(botonCerrar);
    body.appendChild(overlay);
    construirPedido();

}
function construirPedido(){
    articulosCarrito.forEach( (articulo)=>{
        const {imagen, nombre, precio, color, cantidad, id} = articulo;
        const productos = document.querySelector(".overlay__productos");
        const producto = document.createElement("div");;
        producto.classList.add("producto");
        producto.innerHTML = `
            <img class="producto__imagen" src="${imagen}" alt="productoComprar">
            <div class="producto__texto">
                <p class="producto__dessc"><strong>${nombre}</strong></p>
                <p class="producto__dessc"><strong>Color: </strong>${color}</p>
                <p class="producto__dessc"><strong>Cantidad: </strong>${cantidad}</p>
                <p class="producto__dessc"><strong>Precio: </strong>$${precio}</p>
                
            </div>
        `;
        productos.appendChild(producto);
        
    });
    construirTotal();
}
function construirTotal(){
    const total = document.querySelector(".overlay__total");
    const totalResumen = document.createElement("div");
    let cantidad = 0;
    let totalPedido = 0;
    articulosCarrito.forEach( articulo=>{
        totalPedido = parseFloat(articulo.cantidad) * parseFloat(articulo.precio);
        cantidad = cantidad +  totalPedido; 
    });
    console.log(cantidad);
    totalResumen.innerHTML = `
        <p class="total__texto"><strong>Subtotal: </strong>${cantidad}</p>
        <p class="total__texto"><strong>Entrega: </strong>$${250}</p>
        <p class="total__texto"><strong>Cupón: </strong> Ninguno </p>
        <p class="total__texto"><strong>Total </strong>${ cantidad + 250}</p>
        <div class="total__botones">
            <form>
                <input action="GET" class="boton__pagar" type="submit" value="Pagar">
            </form>
        </div>
    `;
    total.appendChild(totalResumen);

}
function sincronizarLocalStorage(){
    localStorage.setItem( "carrito", JSON.stringify(articulosCarrito));
}
cargarEventListeners();