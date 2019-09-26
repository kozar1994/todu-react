import React from "react";

import ToduListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(( item ) => {

    return (
      <li className="list-group-item" key={item.id}>
        <ToduListItem onToggleImportant={()=>onToggleImportant(item.id)} onToggleDone={()=>onToggleDone(item.id)} onDelete={()=>onDelete(item.id)} label={item.label} done={item.done} important={item.important}/>
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}

export default TodoList;