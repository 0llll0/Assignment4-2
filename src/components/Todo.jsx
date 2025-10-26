import Todolist from "./Todolist.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-10 text-gray-800">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <TodoForm setTodo={setTodo} />
        <Todolist todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default Todo;
