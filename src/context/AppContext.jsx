import { useEffect, useReducer, createContext, useContext } from "react";
import { reducer } from "../reducer";

const context = createContext();

export const useStore = () => useContext(context);

const AppContext = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    return localTodos || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <context.Provider value={[todos, dispatch]}>{children}</context.Provider>
  );
};

export default AppContext;
