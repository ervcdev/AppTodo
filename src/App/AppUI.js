import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

function AppUI() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
        }) => {
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}

            {!loading && searchedTodos.length === 0 && (
              <p>Crea tu primer TODO!</p>
            )}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>;
        }}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}
export { AppUI };
