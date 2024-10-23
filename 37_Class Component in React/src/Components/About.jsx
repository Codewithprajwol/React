import React, { useState } from "react";
// import { todos } from "../../data";
export function About() {
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <button onClick={() => {
        import('../../data').then((module)=>setTodoList(module.todos));
      }}> show todo list</button>
      <div>About me</div>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}
