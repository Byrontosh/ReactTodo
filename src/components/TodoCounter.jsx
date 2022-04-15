import React from 'react'
import '../App.css'

const TodoCounter = ({completedTodos,todos}) => 
{
    return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {todos} tareas</h2>
    )
}

export default TodoCounter