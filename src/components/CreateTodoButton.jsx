import React from 'react'
import '../App.css'

const CreateTodoButton = ({handleAddTodo}) => 
{
    const todo = {
        id:crypto.randomUUID(),
        text:"Ver pelicula",
        completed:false
    }
    
    return (

    <button type='submit' className='CreateTodoButton' onClick={()=>{handleAddTodo(todo)}}>+</button>
    )
}

export default CreateTodoButton
