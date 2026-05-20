import { useState } from "react";

function Github() {
    const [usuario, setUsuario] = useState("");
    const [repos, setRepos] = useState([]);
    async function buscarRepos() {
        const respuesta = await fetch(`https://api.github.com/users/${usuario}/repos`);
        const datos = await respuesta.json();
        setRepos(datos);
    }
    return (
        <section id="github">
            <h2>Repositorios GitHub</h2>
            <div className="github-buscador">
                <input
                    type="text"
                    placeholder="Usuario GitHub"
                    onChange={(e) =>
                        setUsuario(e.target.value)
                    }
                />
                <button onClick={buscarRepos}>
                    Buscar
                </button>
            </div>
            <div className="contenedor-tarjetas">
                {repos.map((repo) => (
                    <article className="tarjeta" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>
                            {repo.description ||
                                "Sin descripción"}
                        </p>
                        <a href={repo.html_url} target="_blank">
                            Ver repositorio
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Github;