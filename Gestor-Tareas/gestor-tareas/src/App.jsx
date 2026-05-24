import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

  function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)
  const [statusFilter, setStatusFilter] = useState('Todas')
  const [priorityFilter, setPriorityFilter] = useState('Todas')
  const [sortOption, setSortOption] = useState('fechaReciente')
  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(task) {
    const newTask = {
      ...task,
      id: uuidv4(),
      createdAt: new Date().toISOString()
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
    const confirmDelete = confirm('¿Eliminar tarea?')
    if (confirmDelete) {
      setTasks(tasks.filter(task => task.id !== id))
    }
  }

  function completeTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          estado: 'Completada'
        }
      }
      return task
    }))
  }

  function updateTask(updatedTask) {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ))
    setEditingTask(null)
  }

  let filteredTasks = [...tasks]
  if (statusFilter !== 'Todas') {
    filteredTasks = filteredTasks.filter(
      task => task.estado === statusFilter
    )
  }

  if (priorityFilter !== 'Todas') {
    filteredTasks = filteredTasks.filter(
      task => task.prioridad === priorityFilter
    )
  }

  if (sortOption === 'tituloAZ') {

    filteredTasks.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    )
  }

  if (sortOption === 'tituloZA') {

    filteredTasks.sort((a, b) =>
      b.titulo.localeCompare(a.titulo)
    )
  }

  if (sortOption === 'fechaReciente') {

    filteredTasks.sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    )
  }

  return (

    <>

      <Header />

      <main className='container'>

        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
        />

        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <p className='contador'>
          Total tareas: {filteredTasks.length}
        </p>

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          setEditingTask={setEditingTask}
        />

      </main>

    </>
  )
}

export default App