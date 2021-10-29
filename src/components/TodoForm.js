import { useState } from "react";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      text: setText(text),
      complete: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        placeholder="Add todo.."
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default TodoForm;
