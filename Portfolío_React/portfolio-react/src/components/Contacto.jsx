function Contacto() {
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Correo"/>
                <textarea placeholder="Mensaje"/>
                <button>
                    Enviar
                </button>
            </form>
        </section>
    );
}

export default Contacto;