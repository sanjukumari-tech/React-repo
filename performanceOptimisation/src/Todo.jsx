import React from 'react'

const Todo = ({todo,toggleTodo,deleteTodo,heavyTask}) => {
    const handleToggle = ()=>{
        toggleTodo(todo.id);
        heavyTask();
    }

    const handleDelete= ()=>{
        deleteTodo(todo.id);
    }



  return (
    <div>
        <input type="checkbox" checked={Todo.completed} onChange={handleToggle} />
        <span >{todo.text}</span>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo