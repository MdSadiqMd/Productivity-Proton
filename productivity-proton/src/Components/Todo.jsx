import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="add-todo">
            <input type="text" placeholder='Add Todo' />
            <button>Add</button>
        </div>
        <div className="todo-list">

        </div>
    </div>
  )
}

export default Todo