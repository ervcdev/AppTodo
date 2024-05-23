import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { EmptySearch } from "../EmptyTodos/EmptySearch";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader
       setSearchValue={setSearchValue}
        loading={loading}
       >

        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          
          />

        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          
          />
      </TodoHeader>

      <TodoList
       //propiedad 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        
       
        
        //render props
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchTodos={(searchText) => <EmptySearch searchText={searchValue}/>}

        //  render={todo => (
        //       <TodoItem
        //         key={todo.text}
        //         text={todo.text}
        //         completed={todo.completed}
        //         onComplete={() => completeTodo(todo.text)}
        //         onDelete={() => deleteTodo(todo.text)}
        //       />
        // )}  

      >
        {todo =>  (
           <TodoItem
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           onComplete={() => completeTodo(todo.text)}
           onDelete={() => deleteTodo(todo.text)}
         />
        )}
         </TodoList> 

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
export default App;
