const enviar = document.querySelector('#enviar');
const formulario = document.querySelector("#login-formulario");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", iniciarApp);
    email.addEventListener("blur", validarFormulario);
    password.addEventListener("blur", validarFormulario);
}
function validarFormulario(e){
    if(e.target.value.length>0){
        if(e.target.type !== "email"){
           if(e.target.value.length>=2){
                e.target.classList.remove('border', 'border-red-500', 'bg-red-200');
                e.target.classList.add('border', 'border-green-500', 'bg-green-200');
           }
           else{
                e.target.classList.remove('border', 'border-green-500', 'bg-green-200');
                e.target.classList.add('border', 'border-red-500', 'bg-red-200');
                mostrarError("")
           }
        }
        else{  
            const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(expresionRegular.test(e.target.value)){
                e.target.classList.remove('border', 'border-red-500', 'bg-red-200');
                e.target.classList.add('border', 'border-green-500', 'bg-green-200');
            } 
            else{
                e.target.classList.remove('border', 'border-green-500', 'bg-green-200');
                e.target.classList.add('border', 'border-red-500', 'bg-red-200');
                mostrarError("Email no válido")
            }
            
        }
    }
    else{
        e.target.classList.remove('border', 'border-green-500', 'bg-green-200');
        e.target.classList.add('border', 'border-red-500', 'bg-red-200');
        mostrarError("Todos los campos son obligatorios");
    }
}
function iniciarApp(){

}
function mostrarError(){

}