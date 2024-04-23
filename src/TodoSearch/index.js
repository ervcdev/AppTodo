import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { 
    searchValue,
    setSearchValue 
  } = React.useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="buscar"
      value={searchValue}
      onChange={(event) => {
        console.log("busco");
        setSearchValue(event.target.value);
        console.log("despued", event.target.value);
      }}
    />
  );
}

export { TodoSearch };
