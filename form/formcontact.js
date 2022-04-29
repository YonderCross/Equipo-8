const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/ // 7 a 10 numeros.
}

const campos = {
	
	nombre: false,
	correo: false,
	telefono: false,
    contraseña: false,
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "contraseña":
			validarCampo(expresiones.contraseña, e.target, 'contraseña');
			validarccontraseña();
		break;
		case "ccontraseña":
			validarccontraseña();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}



const validarccontraseña = () => {
	const inputcontraseña = document.getElementById('contraseña');
	const inputccontraseña = document.getElementById('ccontraseña');

	if(inputcontraseña.value !== inputccontraseña.value){
		document.getElementById(`ccontraseña`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`ccontraseña`).classList.remove('formulario__grupo-correcto');
		document.querySelector(` i`).classList.add('fa-times-circle');
		document.querySelector(`i`).classList.remove('fa-check-circle');
		
		campos['contraseña'] = false;
	} else {
		document.getElementById(`ccontraseña`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
