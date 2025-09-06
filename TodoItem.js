import React from "react";

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task ${task.done ? "done" : ""}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
