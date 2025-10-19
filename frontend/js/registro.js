// --- Selección del formulario ---
const form = document.getElementById('formRegistro');

// Escuchar el evento submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita envío automático

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirm_password = document.getElementById('confirm_password').value.trim();
    const mensaje = document.getElementById('mensaje');

    // Limpiar errores previos
    limpiarErrores();
    let hayErrores = false;

    // --- Validaciones ---
    if (nombre === "") {
        mostrarError('nombre', "El campo nombre es obligatorio.");
        hayErrores = true;
    }

    if (email === "") {
        mostrarError("email", "El email es obligatorio.");
        hayErrores = true;
    } else if (!validarEmail(email)) {
        mostrarError("email", "El formato del email es incorrecto.");
        hayErrores = true;
    }

    if (password === "") {
        mostrarError("password", "La contraseña es obligatoria.");
        hayErrores = true;
    } else if (password.length < 8) {
        mostrarError("password", "La contraseña debe tener al menos 8 caracteres.");
        hayErrores = true;
    }

    if (confirm_password === "") {
        mostrarError("confirm_password", "Debes confirmar la contraseña.");
        hayErrores = true;
    } else if (password !== confirm_password) {
        mostrarError("confirm_password", "Las contraseñas no coinciden.");
        hayErrores = true;
    }

    // --- Resultado ---
    if (hayErrores) {
        mensaje.textContent = "Por favor, corrige los errores antes de continuar.";
        mensaje.style.color = "red";
        return;
    }

    // Si todo está bien
    mensaje.textContent = "✅ ¡Formulario enviado con éxito!";
    mensaje.style.color = "green";

    form.submit();
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
    document.querySelectorAll(".error").forEach(span => (span.textContent = ""));
    document.querySelectorAll("input").forEach(input => input.classList.remove("error-input"));
}
