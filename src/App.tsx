import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import Promo from "./components/Promo";
export interface TodoItem {
  id: string;
  name: string;
  done: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  return (
    <div
      className="App  px-8 py-16"
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <Promo />
      <TodoList />
    </div>
  );
}

export default App;
