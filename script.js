const botonTema = document.getElementById("boton-tema");

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("dark-mode");
    botonTema.textContent = "☀️";
}

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("tema", "oscuro");
        botonTema.textContent = "☀️";

    } else {

        localStorage.setItem("tema", "claro");
        botonTema.textContent = "🌙";
    }

});