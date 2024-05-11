import React from "react";
import { TodoCounter } from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";

function TodoHeader({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
}) {
  return(  
  <header>
    <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
  </header>)
}

export { TodoHeader };