import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoItems from './TodoItems';

const Todo = () => {
    const [todos,setTodos]=useState(null);
    const inputRef=useRef(null);
    const add=()=>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value="";
    }
    useEffect(()=>{

    },[todos]);
  return (
    <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="add-todo">
            <input ref={inputRef} type="text" placeholder='Add Todo' />
            <button>Add</button>
        </div>
        <div onClick={()=>{add}} className="todo-list">
            {todos.map((item,index)=>{
                return <TodoItems key={index} no={item.no} display={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}

export default Todo