import React, { useState } from 'react'
import '../App.css'


const TodoSearch = ({handleSearch}) => 
{
    return (
        <input 
            type="text" 
            placeholder="please add new Todo" 
            className='TodoSearch'
            onChange={(e)=>{handleSearch(e.target.value)}}
        />
    )
}

export default TodoSearch