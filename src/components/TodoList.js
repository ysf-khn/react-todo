import TodoForm from "./TodoForm";

import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todo, ...todos]);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <p>{todos}</p>
    </>
  );
};

export default TodoList;
