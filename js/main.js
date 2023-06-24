function desactivarMontoDigitado() {
    document.getElementById('monto_digitado').value = "";
}

function desactivarMontos() {
    var montos = document.getElementsByName('monto');
    for (var i = 0; i < montos.length; i++) {
        montos[i].checked = false;
    }
}

function validarFormulario(){
    var montoElegido = document.querySelector("input[name='monto']:checked");
    var montoDigitado = document.getElementById('monto_digitado').value;
    var frecuenciaElegida = document.querySelector("input[name='frecuencia']:checked");
    var mensajeError = document.getElementById('mensaje_error');
    mensajeError.innerHTML = "";

    if(!montoElegido && montoDigitado === ""){
        mensajeError.innerHTML = "Elige o digita un monto";
        return false;
    }

    if(!frecuenciaElegida){
        mensajeError.innerHTML = "Elige una frecuencia";
        return false;
    }

}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('contraseña');
    var eyeIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

function cambiaricono() {
    const opcionCheck = document.querySelector("#opcion-check");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li");
    var icon = document.querySelector('.menu-icon');

    

    if (opcionCheck.checked) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');

    } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));
