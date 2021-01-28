import React from "react";
import useFetch from "../hooks/useFetch";

const TodoList = () => {
  const [todos, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );

  if (loading) return <h1>Chargement ...</h1>;
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
