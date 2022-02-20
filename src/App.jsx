import { useState, useEffect } from "react";
import { Header, Form, List, Tab } from "./components";
import { AppContext, FilterContext } from "./context";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const themeType = JSON.parse(localStorage.getItem("themeDark"));
    return themeType || false;
  });

  useEffect(() => {
    localStorage.setItem("themeDark", JSON.stringify(isDark));
    document.body.classList.toggle("dark");
  }, [isDark]);

  return (
    <div className="todo-container">
      <Header isDark={isDark} toggleTheme={setIsDark} />
      <AppContext>
        <Form />
        <FilterContext>
          <List />
          <Tab />
        </FilterContext>
      </AppContext>
    </div>
  );
};

export default App;
