import Item from "../item/Item";

import { useStore } from "../../context/AppContext";
import { useFilter } from "../../context/FilterContext";

import "./list.css";

const List = () => {
  const [todos] = useStore();
  const [filterType] = useFilter();

  let filteredTodos;

  switch (filterType) {
    case "all":
      filteredTodos = todos;
      break;
    case "active":
      filteredTodos = todos.filter((item) => !item.completed);
      break;
    case "completed":
      filteredTodos = todos.filter((item) => item.completed);
      break;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.length ? (
        filteredTodos.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <p className="empty-msg">{`Whoops, you got no ${filterType === "all" ? "" : filterType
          } todos`}</p>
      )}
    </ul>
  );
};

export default List;
