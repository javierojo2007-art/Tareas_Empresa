import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, completeTask, setEditingTask }) {
    return (
        <section className="task-list">
            {tasks.map((task) => (
            <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
                setEditingTask={setEditingTask}
            />
        ))}
    </section>
    );
}

export default TaskList;
