function TaskCard({ task, deleteTask, completeTask, setEditingTask }) {
    return (
    <article
        className={`task-card ${task.estado === "Completada" ? "completed" : ""}`}
    >
        <h3>{task.titulo}</h3>
        <p>{task.descripcion}</p>
        <span className={`prioridad ${task.prioridad}`}>{task.prioridad}</span>
        <p>Estado: {task.estado}</p>
        {task.fechaLimite && <p>Fecha límite: {task.fechaLimite}</p>}
        <div className="botones">
        <button onClick={() => setEditingTask(task)}>Editar</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        <button onClick={() => completeTask(task.id)}>Completar</button>
        </div>
    </article>
    );
}

export default TaskCard;
