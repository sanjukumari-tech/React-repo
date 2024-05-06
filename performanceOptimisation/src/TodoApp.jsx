import React, { useMemo, useState } from 'react'
import TodoInput from './TodoInput';
import Todo from './Todo';
import { heavyTask } from './utils';
// for optimization we can use React.memo, callback, useMemo hooks 


const TodoApp = () => {
    const [todo, setTodos]= useState([]);
    const addTodo = (text)=>{
           setTodos((prevTodos)=> [...prevTodos,{id:Date.now(),text,completed:false}])
    }


    const toggleTodo = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>todo.id === id?{...todo,completed: !todo.completed} :todo));
    }

    const deleteTodo = ()=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id != id));

    };

    const memoizedHeavyTask =useMemo(()=>heavyTask,[]);
    
  return (
    // have two child component todoinput and  todo 
    <div>
        <TodoInput addTodo= {addTodo}/> 
        {todo.map((todo)=>(
            <Todo key = {todo.id} todo = {todo}  toggleTodo = {toggleTodo}
            deleteTodo = {deleteTodo} heavyTask = {memoizedHeavyTask}
            />
        ))}

    </div>
  )
}

export default TodoApp