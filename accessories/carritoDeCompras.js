const car = document.querySelector("#car");
const conteinerCar = document.querySelector("car__list tbody");
const accessories__container = document.querySelector("accessories__container");
const carCleanButton = document.querySelector("#car__clean");
let articulosCarrito = [];

function loadEventListeners(){
    accessories__container.addEventListener("click", agregarAccesorio);
    car.addEventListener("click", eliminarAccesorio);
    carCleanButton.addEventListener("click", ()=>{
        carAccessories = JSON.parse(localStorage.getItem("car")) || [];
        construirCarritoHTML();
    });
}

function addAccessory(e){
    e.preventDefault();
    if(e.target.classList.contains("buy__button")){
        const selectedArticle = e.target.parentElement.parentElenent;
        read__Data(selectedArticle);
    }
}

function read__Data(accessory){
    const accessoryInformation = {
        image: accessory.querySelector(".accesory__picture").src,
        nombre: accessory.querySelector(".accessory__name").textContent,
        precio: accessory.querySelector(".accessory__price").textContent,
        cantidad: 1
    }

const exists = carAccessories.some( accessory=>{
    return accessory.id === infoCurso.id
});
if(exists){
    
}
carAccessories = [...carAccessories];
}
function buildCartoHTML(){
    carCleantoHTML();
    carAccessories.forEach(accessory=>{
        const {image, nombre, precio, cantidad, id} = accessory;
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>img src="${image}" widt="100></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
`;
    })
}