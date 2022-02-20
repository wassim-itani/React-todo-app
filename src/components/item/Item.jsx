import { useStore } from "../../context/AppContext";
import "./item.css";

const Item = ({ id, text, completed }) => {
  const [, dispatch] = useStore();

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
  };

  return (
    <li className="todo-item">
      <i className="fas fa-check" onClick={toggleComplete}></i>
      <p className={`todo-text ${completed ? "completed" : ""}`}>{text}</p>
      <i className="fas fa-close" onClick={deleteTodo}></i>
    </li>
  );
};

export default Item;
