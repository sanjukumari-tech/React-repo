import React, { useState } from 'react'
// import {TodoApp} from "./TodoApp";

const TodoInput = () => {
    const[inputValue, setInputValue]= useState("");


    const handleChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!inputValue.trim()) return ;
        addTodo(inputValue);
        setInputValue("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type='submit'>Todo</button>
        </form>
    </div>
  )
}

export default TodoInput