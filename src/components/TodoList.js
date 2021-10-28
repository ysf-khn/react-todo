import TodoForm from "./TodoForm";

import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} />
      <p>{todos}</p>
    </>
  );
};

export default TodoList;
