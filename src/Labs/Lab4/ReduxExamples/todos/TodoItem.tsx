import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
    todo,
  }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    const buttonStyle = {
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      marginRight: "5px",
      color: "white",
    };
  
    return (
        <li key={todo.id} className="list-group-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {todo.title}
        <div>
          <button
            onClick={() => dispatch(setTodo(todo))}
            style={{ ...buttonStyle, backgroundColor: "blue" }}
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            style={{ ...buttonStyle, backgroundColor: "red" }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
  