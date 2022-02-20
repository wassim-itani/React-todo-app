import { useState, createContext, useContext } from "react";

const filterContext = createContext();

export const useFilter = () => useContext(filterContext);

const FilterContext = ({ children }) => {
  const [filterType, setFilterType] = useState("all");

  return (
    <filterContext.Provider value={[filterType, setFilterType]}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContext;
