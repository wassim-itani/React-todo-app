import { useState, useEffect, useRef } from "react";
import { useStore } from "../../context/AppContext";
import "./form.css";

const Form = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [, dispatch] = useStore();

  const addTodo = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    dispatch({ type: "ADD_TODO", payload: { text } });
    setText("");
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        ref={inputRef}
        onChange={handleText}
      />
      <i className="fas fa-plus" onClick={addTodo}></i>
    </form>
  );
};

export default Form;
