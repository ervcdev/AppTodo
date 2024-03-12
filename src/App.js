import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      
         
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>Vender</p>
      <spna>x</spna>
    </li>
  );
}

export default App;
