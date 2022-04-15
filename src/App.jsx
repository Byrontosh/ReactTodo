import { useEffect, useState } from 'react'
import './App.css'
import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

const  InitialTodos = [
  {
    id:1,
    text:"Hacer ejercicios",
    completed:false
  },
  {
    id:2,
    text:"Hacer la tarea",
    completed:false
  },
  {
    id:3,
    text:"Lavar el auto",
    completed:false
  }
]


function App() 
{
  // const [search, setSearch] = useState("")
  const [todos, setTodos] = useState(InitialTodos)
  const [todosFilter, setTodosFilter] = useState(todos)

  const completedTodos = todos.filter(todo=> todo.completed === true).length


  const handleSearch = (search) =>
  {
    let searchTodo = todosFilter.filter(todo => {
      if (todo.text.toLowerCase().includes(search.toLowerCase()))
      return todo
    })
    setTodos(searchTodo)
  }

  // const handleSearch = (e) =>
  // {
  //   setSearch(e.target.value)
  //   let searchTodo = todosFilter.filter(todo => {
  //     if (todo.text.toLowerCase().includes(search.toLowerCase()))
  //     return todo
  //   })
  //   setTodos(searchTodo)
  // }

  const handleDelete =(text) =>{
    const newTodos = todos.filter(todo=> todo.text !== text)
    setTodos(newTodos)
    setTodosFilter(newTodos)
  }

  const handleCompleted = (text) =>{
    const newTodos = todos.map(todo=> (
      todo.text === text 
      ? 
        {
          ...todo,
          completed: true
        }
      :
        todo
    ))
    setTodos(newTodos)
    setTodosFilter(newTodos)
  }

  const handleAddTodo =(todo) =>{
    setTodos([...todos,todo])
    setTodosFilter([...todos,todo])
  }


  return (
    <div >
      <TodoCounter completedTodos={completedTodos} todos={todos.length}/>
      <TodoSearch handleSearch={handleSearch}/>
      <CreateTodoButton handleAddTodo={handleAddTodo}/>
      <TodoList>
        {
          todos.length === 0 
          ?
            <p>Don't exist Todos</p>
          :
          todos.map(todo=>(
            <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted}/>
          ))
        }
      </TodoList>
    </div>
  )
}

export default App
