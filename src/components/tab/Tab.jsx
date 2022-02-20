import { useFilter } from "../../context/FilterContext";
import "./tab.css";

const Tab = () => {
  const [filterType, setFilterType] = useFilter();

  return (
    <ul className="filter-tab">
      <li
        className={`filter-item ${filterType === "all" ? "active" : ""} `}
        onClick={() => setFilterType("all")}
      >
        All
      </li>
      <li
        className={`filter-item ${filterType === "active" ? "active" : ""} `}
        onClick={() => setFilterType("active")}
      >
        Active
      </li>
      <li
        className={`filter-item ${filterType === "completed" ? "active" : ""} `}
        onClick={() => setFilterType("completed")}
      >
        Completed
      </li>
    </ul>
  );
};

export default Tab;
