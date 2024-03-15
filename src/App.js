import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import React from "react";

const defaultTodos = [
  { text: "mirar", completed: false },
  { text: "zapatos", completed: true },
  { text: "verde", completed: true },
  { text: "tres", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
