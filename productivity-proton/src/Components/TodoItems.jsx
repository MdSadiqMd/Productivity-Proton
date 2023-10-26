import React from 'react'
import tick from './Assets/accept.png'
import not_tick from './Assets/not_tick'
import cross from './Assets/bin.png'

const TodoItems = (no,display,text,) => {
  return (
    <div className="todoitems">
        <div className="todoitems-container">
            <img src={not_tick} alt="" />
            <img src={tick} alt="" />
            <div className="todoItems-text">{text}</div>
        </div>
        <img src={cross} alt="" />
    </div>
  )
}

export default TodoItems