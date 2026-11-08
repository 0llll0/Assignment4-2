import Todolist from "./Todolist.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([
    { task: "오픈소스 프로젝트 고르기", status: "완료" },
    { task: "React 코드 읽어보기", status: "진행 중" },
  ]);

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col items-center justify-start p-10 text-gray-800">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <TodoForm setTodo={setTodo} />
        <Todolist todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default Todo;
