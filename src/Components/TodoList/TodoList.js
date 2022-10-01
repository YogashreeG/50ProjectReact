import React, { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
  };

  const heandleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h3>TodoList</h3>
        <form className="todoform" onSubmit={handleSubmit}>
          <input type={"text"} onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Go</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => heandleDelete(t.id)}>Delete</button>
            </li>
          ))}

          {/* <li className="singleTodo">
                  <span className="todoText">Leadrn React</span>
                  <button>Edit</button>
                  <button>Delete</button>
                </li> */}
          {/* <li>
                  <span>Leadrn React</span>
                  <button>Edit</button>
                  <button>Delete</button>
                </li> */}
        </ul>
      </div>
    </div>
  );
};
