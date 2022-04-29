const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const pass = document.getElementById("contraseña")
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
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
