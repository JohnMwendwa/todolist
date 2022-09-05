import React, { useContext, useState } from "react";
import Todo from "./Todo";
import { TodosContext } from "../context/todos.context";
import "./TodoList.css";
import SearchTodos from "./SearchTodos";

function TodoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const todos = useContext(TodosContext);
  const tasks = todos
    .filter((val) => {
      return searchTerm.trim().toLowerCase() === ""
        ? val
        : val.task.toLowerCase().includes(searchTerm.trim().toLowerCase());
    })
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        todo={todo.task}
        completed={todo.completed}
      />
    ));
  return (
    <div className="TodoList">
      <SearchTodos setSearch={setSearchTerm} />
      <ul>{tasks}</ul>
    </div>
  );
}

export default TodoList;
