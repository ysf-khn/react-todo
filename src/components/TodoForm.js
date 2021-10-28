import { useState } from "react";

const TodoForm = ({ todos }) => {
  const [todo, setTodo] = useState("");

  const handleChange = () => {
    setTodo(todo);
    todos.push(todo);
  };

  return (
    <form>
      <input placeholder="Add todo.."></input>
      <button onClick={handleChange}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
