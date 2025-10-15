document.getElementById('fromRegistro').addEventListener('submit', function(event){


    //Evitamos que se envie automaticamente.
    event.preventDefault();


    //Obtenemos los valores.
    const nombre = document.getElementById('nombre').value.trim();
    const email= document.getElementById('email').value.trim();

    const password= document.getElementById('password').value.trim();
    const confirm_password= document.getElementById('confirm_password').value.trim();

    const mensaje = document.getElementById('mensaje');

    limpiarErrores();

    let hayErrors = false;

    //Validaciones.

    if(nombre === ""){
        mostrarError('nombre',"El campo nombre es obligatorio.");
        hayErrors =true;
    }

    if(email ===""){
        mostrarError("email","El email es obligatorio.");
        hayErrors ="true;"
    }else if(!validarEmail(email)){
        mostrarError("email","El formato del email es incorrecto.");
        hayErrors = true;
    }

    if(password ===""){
        mostrarError("password","La contraseña es obligatoria.");
        hayErrors=true;
    }


     if (confirm_password === "") {
        mostrarError("confirm_password", " Debes confirmar la contraseña.");
        hayErrores = true;
    } else if (password !== confirm_password) {
        mostrarError("confirm_password", " Las contraseñas no coinciden.");
        hayErrores = true;
    }



    if (hayErrores) {
            mensaje.textContent = "";
            return;
        }

        mensaje.textContent = "Formulario enviado con éxito!";
        mensaje.style.color = "green";

});

// --- Funciones auxiliares ---
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarError(campo, mensaje) {
    const span = document.getElementById(`error-${campo}`);
    const input = document.getElementById(campo);
    span.textContent = mensaje;
    input.classList.add("error-input");
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    document.querySelectorAll("input").forEach(input => input.classList.remove("error-input"));
}