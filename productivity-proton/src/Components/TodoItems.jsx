import React from 'react';
import tick from './Assets/accept.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/bin.png';

const TodoItems = ({ no, display, text, setTodos }) => {
  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
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
  };

  return (
    <div className="todoitems">
      <div className="todoitems-container" onClick={toggle}>
        {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}

        <div className="todoItems-text">{text}</div>
      </div>
      <img src={cross} alt="" />
    </div>
  );
}

export default TodoItems;
