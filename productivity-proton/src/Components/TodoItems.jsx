import React from 'react';
import tick from './Assets/accept.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/bin.png';
import './TodoItems.css'

const TodoItems = ({ no, display, text, setTodos }) => {
  const toggle = () => {
    try {
      let data = JSON.parse(localStorage.getItem("todos")) || [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].no === no) {
          if (data[i].display === "") {
            data[i].display = "line-through";
          } else {
            data[i].display = "";
          }
          break;
        }
      }
      setTodos(data);
      localStorage.setItem("todos", JSON.stringify(data));
    } catch (error) {
      console.error("Error accessing or updating localStorage:", error);
    }
  };

  const deleteTodo = (no) => {
    try {
      let data = JSON.parse(localStorage.getItem("todos")) || [];
      data = data.filter((todo) => todo.no !== no); 
      setTodos(data);
      localStorage.setItem("todos", JSON.stringify(data));
    } catch (error) {
      console.error("Error accessing or updating localStorage:", error);
    }
  }

  return (
    <div className="todoitems">
      <div className="todoitems-container" onClick={toggle}>
        {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}

        <div className="todoItems-text">{text}</div>
      </div>
      <img onClick={() => deleteTodo(no)} src={cross} alt="" /> 
    </div>
  );
}

export default TodoItems;
