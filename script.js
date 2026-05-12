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

const formularioEstudio = document.getElementById("formulario-estudio");
const tituloInput = document.getElementById("titulo-estudio");
const fechaInput = document.getElementById("fecha-estudio");
const descripcionInput = document.getElementById("descripcion-estudio");
const contenedorEstudios = document.getElementById("contenedor-estudios");
const listaEstudios = [];

formularioEstudio.addEventListener("submit", (event) => {

    event.preventDefault();
    const estudio = {

        titulo: tituloInput.value,
        fecha: fechaInput.value,
        descripcion: descripcionInput.value

    };

    listaEstudios.push(estudio);
    crearTarjetaEstudio(estudio);
    formularioEstudio.reset();

});

function crearTarjetaEstudio(estudio) {

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-estudio");
    const titulo = document.createElement("h3");
    titulo.textContent = estudio.titulo;
    const fecha = document.createElement("small");
    fecha.textContent = estudio.fecha;
    const descripcion = document.createElement("p");
    descripcion.textContent = estudio.descripcion;
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(fecha);
    tarjeta.appendChild(descripcion);
    contenedorEstudios.appendChild(tarjeta);
}