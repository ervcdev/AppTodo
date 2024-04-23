import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI.js";
import React from "react";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
  
}

export default App;
