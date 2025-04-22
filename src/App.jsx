// import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './features/tasks/TaskList'

function App() {
  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-6 text-center' >Redux Task Manager</h1>
      <AddTaskForm />
      <TaskList/>
    </div>
  )
}

export default App
