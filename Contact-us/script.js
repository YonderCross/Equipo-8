console.log("Hola");
const nombre = document.getElementById("nombre");
const tel = document.getElementById("tel")
const email = document.getElementById("email");
const mensaje = document.getElementById("data1");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

eventListeners()

function eventListeners(){
    nombre.addEventListener("blur",validarFormulario);
    tel.addEventListener("blur", validarFormulario);
    email.addEventListener("blur", validarFormulario);
}

function validarFormulario(val){
        
    if(val.target.value != 0){
        if((val.target.type == "text")){
            console.log("nombre");
        }
        else if(val.target.type == "tel"){
            if(this.value.length == 10){
                console.log("correcto"); 
            }
            else{
                console.log("incorrecto"); 
            }
        }
        else if(val.target.type == "email"){
            if(expresionRegular.test(val.target.value))
                console.log("funciona");
            else{
                console.log("no funciona")
            }
        }
    }

}

function validacion(){

}
