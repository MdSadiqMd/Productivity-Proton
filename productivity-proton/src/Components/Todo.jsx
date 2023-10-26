import React, { useEffect, useRef, useState } from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

const Todo = () => {
    // Initialize todos with the stored values or an empty array
    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        return storedTodos || [];
    });

    const inputRef = useRef(null);

    // Retrieve the count from local storage
    const storedCount = localStorage.getItem("todos-count");
    const [count, setCount] = useState(storedCount ? parseInt(storedCount) : 1);

    const add = () => {
        setTodos([...todos, { no: count, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        setCount(count + 1);

        // Update the count in local storage
        localStorage.setItem("todos-count", count + 1);
    }

    useEffect(() => {
        // Store todos in local storage whenever todos change
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="add-todo">
                <input ref={inputRef} type="text" placeholder='Add Todo' />
                <button onClick={add}>Add</button>
            </div>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
                })}
            </div>
        </div>
    )
}

export default Todo;
