import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoItems from './TodoItems';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const [count, setCount] = useState(1); // Initialize count
    const add = () => {
        setTodos([...todos, { no: count, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        setCount(count + 1);
    }
    useEffect(() => {
        // Add any additional logic you need here when todos change
    }, [todos]);

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="add-todo">
                <input ref={inputRef} type="text" placeholder='Add Todo' />
                <button onClick={add}>Add</button> {/* Fix: Add parentheses to invoke 'add' */}
            </div>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <TodoItems key={index} no={item.no} display={item.display} text={item.text} />
                })}
            </div>
        </div>
    )
}

export default Todo;
