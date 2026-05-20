import { useState } from "react";

function Estudios() {
    const [titulo, setTitulo] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estudios, setEstudios] = useState([]);
    function agregarEstudio(e) {
        e.preventDefault();
        const nuevoEstudio = {
            titulo,
            fecha,
            descripcion
        };
        setEstudios([...estudios, nuevoEstudio]);
        setTitulo("");
        setFecha("");
        setDescripcion("");
    }
    return (
        <section id="estudios">
            <h2>Estudios y cursos</h2>
            <form onSubmit={agregarEstudio}>
                <input type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) =>
                        setTitulo(e.target.value)
                    }
                    required
                />
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) =>
                        setFecha(e.target.value)
                    }
                    required
                />
                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) =>
                        setDescripcion(e.target.value)
                    }
                    required
                />
                <button type="submit">
                    Añadir
                </button>
            </form>
            <div className="contenedor-tarjetas">
                {estudios.map((estudio, index) => (
                    <article className="tarjeta" key={index}>
                        <h3>{estudio.titulo}</h3>
                        <small>{estudio.fecha}</small>
                        <p>{estudio.descripcion}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Estudios;