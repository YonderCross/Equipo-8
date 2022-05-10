console.log("Hola");
const nombre = document.getElementById("nombre");
const tel = document.getElementById("tel")
const email = document.getElementById("email");
const mensaje = document.getElementById("data1");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let nom, phon, corr, mens;

eventListeners()

function eventListeners(){
    nombre.addEventListener("blur",validarFormulario);
    tel.addEventListener("blur", validarFormulario);
    email.addEventListener("blur", validarFormulario);
}

function validarFormulario(val){
        
    if(val.target.value != 0){
        if((val.target.type == "text")){
            nom = true;  
        }
        else if(val.target.type == "tel"){
            if(this.value.length == 10){
                phon = true;
            }
            else{
                phon = false;
            }
        }
        else if(val.target.type == "email"){
            if(expresionRegular.test(val.target.value)){
                corr = true;
            }
            else{
                corr = false;
            }
        }
    }

}

function validacion(){
    if(phon == false){
        document.getElementById("warning").innerHTML = "¡Por favor ingrese un número válido!";
    }
    else if(corr==false){
        document.getElementById("warning").innerHTML = "¡Por favor ingrese un email válido!";
    }
    else if(nom==true && phon==true && corr==true){
        document.getElementById("warning").innerHTML = "¡Mensaje enviado exitosamente!";
    }
    else{
        document.getElementById("warning").innerHTML = "¡Información no válida!";

    }
}