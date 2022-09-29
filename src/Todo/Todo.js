import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import { addTodo, deleteTodo } from "./Todo.slice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoTitle, setTodoTitle] = useState("");
  const [todosList, setTodosList] = useState([]);

  const getTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  useEffect(() => {
    setTodosList(todos);
    console.log("Set todos", todosList);
  }, [todos]);

  return (
    <div className="todo">
      <div className="container">
        <div className="todo__header">
          <input
            type="text"
            placeholder="Add your todo to list"
            onChange={(e) => getTitle(e)}
          />
          <button
            className="todo__btn"
            onClick={() => dispatch(addTodo(todoTitle))}
          >
            Add
          </button>
        </div>
        <div className="todo_list">
          {Array.isArray(todosList.todos)
            ? todosList.todos?.map((item, index) => (
                <div key={index} className="todo__item">
                  <div className="todo__text">{ item }</div>
                  <div className="todo__btns">
                    <button className="todo__btn_delete" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Todo;
