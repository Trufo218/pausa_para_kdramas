const form = document.getElementById("formLogin");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !email.includes("@")) {
        valid = false;
        document.getElementById("error-email").textContent = "Email inválido";
    } else {
        document.getElementById("error-email").textContent = "";
    }

    if (!password) {
        valid = false;
        document.getElementById("error-password").textContent = "Contraseña requerida";
    } else {
        document.getElementById("error-password").textContent = "";
    }

    if (valid) {
        form.submit(); // o llamada AJAX
    }
});
