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

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState(" ");
  console.log('buscaron',searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length ;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
    </>
  );
}

export default App;
