import { useEffect, useState } from "react";
    function TaskForm({ addTask, editingTask, updateTask }) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioridad] = useState("Media");
    const [estado, setEstado] = useState("Pendiente");
    const [fechaLimite, setFechaLimite] = useState("");
    useEffect(() => {
        if (editingTask) {
            setTitulo(editingTask.titulo);
            setDescripcion(editingTask.descripcion);
            setPrioridad(editingTask.prioridad);
            setEstado(editingTask.estado);
            setFechaLimite(editingTask.fechaLimite);
        }
    }, [editingTask]);

    function handleSubmit(e) {
    e.preventDefault();
    const task = {
        titulo,
        descripcion,
        prioridad,
        estado,
        fechaLimite,
    };
    if (editingTask) {
        updateTask({
            ...task,
            id: editingTask.id,
            createdAt: editingTask.createdAt,
        });
    } else {
        addTask(task);
    }
    setTitulo("");
    setDescripcion("");
    setPrioridad("Media");
    setEstado("Pendiente");
    setFechaLimite("");
    }

    return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Título"
            maxLength="100"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
        />
        <textarea
            placeholder="Descripción"
            maxLength="500"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
        />

        <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
        </select>

        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option>Pendiente</option>
            <option>En Progreso</option>
            <option>Completada</option>
        </select>

        <input
            type="date"
            value={fechaLimite}
            onChange={(e) => setFechaLimite(e.target.value)}
        />

        <button type="submit">
            {editingTask ? "Guardar Cambios" : "Crear Tarea"}
        </button>
    </form>
    );
}

export default TaskForm;
