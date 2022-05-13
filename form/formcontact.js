const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const pass = document.getElementById("contraseña")
const passc = document.getElementById("ccontraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



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
        //registrar(nombr,apelli,corre,tele,dire,contras);
        parrafo.innerHTML = "Enviado"
        registrar();
    }
})

var input=  document.getElementById('numero');
input.addEventListener('input',function(){
  if (this.value.length > 10) 
     this.value = this.value.slice(0,10); 
})

function mostrar(){
    fetch("http://localhost:8080/usuario")
        .then((data) => data.json())
        .then((dataJson) => console.log(dataJson));
    }
function registrar(){

axios.post("http://localhost:8080/usuario",
{
    "idUsuario": Math.random()*100,
    "nombre": document.getElementById("nombre").value,
    "apellido1": document.getElementById("apellidos").value,
    "apellido2": "",
    "correo": document.getElementById("correo").value,
    "telefono": document.getElementById("numero").value,
    "direccion": document.getElementById("direccion").value,
    "contrasena": document.getElementById("contraseña").value
}
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}