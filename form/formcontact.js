const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const pass = document.getElementById("contraseña")
const passc = document.getElementById("ccontraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

/*const nomb = document.getElementById("nombre").value
const apell = document.getElementById("nombre").value
const corr = document.getElementById("nombre").value
const tel = document.getElementById("nombre").value
const dire = document.getElementById("nombre").value
const contra = document.getElementById("nombre").value*/

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =" "
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        warnings += `El correo no es valido <br>`
        entrar = true
    
    }
    if(pass.value != passc.value){
        warnings += `La contraseña debe ser la misma <br>`
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
  
    else{
        parrafo.innerHTML = "Enviado"
    }
})

var input=  document.getElementById('numero');
input.addEventListener('input',function(){
  if (this.value.length > 10) 
     this.value = this.value.slice(0,10); 
})

/*
function registrar(){

    axios.post("http://localhost:8080/usuario",
{
    "idUsuario": getElementById.value,
    "nombre": "Ale",
    "apellido1": "Perez",
    "apellido2": "Sandoval",
    "correo": "alesandoval@gmail.com",
    "telefono": 55569874,
    "direccion": "avenida vicentenario no 99 Azcapotzalco",
    "contrasena": "yasuperlao111"
}
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}*/