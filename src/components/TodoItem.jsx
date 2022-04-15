import React from 'react'
import '../App.css'


const TodoItem = ({todo,handleDelete,handleCompleted}) => 
{
    const {completed, text}= todo
    return (
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={()=>{handleCompleted(text)}}
            >√</span>
            
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            
            <span 
            className='Icon Icon-delete'
            onClick={()=>{handleDelete(text)}}
            >x</span>
        </li>
    )
}

export default TodoItem