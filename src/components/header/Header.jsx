import "./header.css";

const Header = ({ isDark, toggleTheme }) => {
  return (
    <div className="todo-header">
      <h1>Todo</h1>
      <i
        className={`fas fa-${isDark ? "sun" : "moon"}`}
        onClick={() => toggleTheme(!isDark)}
      ></i>
    </div>
  );
};

export default Header;
