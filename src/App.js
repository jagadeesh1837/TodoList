import React from "react";
import Todo from "./Components/Todo/Todo";
import "./App.css";
import TodoList from "./Components/Todolist/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext>
      <div className="todo-app">
        <TodoList draggable />
      </div>
    </DragDropContext>
  );
}

export default App;
