import React from 'react'
import '../App.css'


const TodoList = ({children}) => 
{
    return (
        <section>
            <ul>
            {children}
            </ul>
        </section>
    )
}

export default TodoList