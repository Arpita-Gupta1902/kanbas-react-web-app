import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
  ) {
    const buttonStyle = {
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        marginRight: "5px",
        color: "white"
      };
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();    
    return (
        <li className="list-group-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <input
          value={todo.title}
          onChange={(e) =>
            dispatch(setTodo({ ...todo, title: e.target.value }))
          }
        />
        <div>
          <button
              onClick={() => dispatch(updateTodo(todo))}
              style={{ ...buttonStyle, backgroundColor: "#FFDB58", color: "black" }}
          >
              Update
          </button>
          <button
              onClick={() => dispatch(addTodo(todo))}
              style={{ ...buttonStyle, backgroundColor: "green" }}
          >
              Add
          </button>
        </div>
      </li>
  );}
  
  