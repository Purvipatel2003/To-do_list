import React,{ useState,useEffect } from "react";
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodosList from "./Components/TodosList";

const App=()=> {
  const initialState=JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState(initialState);
  const [editTodo,setEditTodo]=useState(null);

  useEffect(()=>
  {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
         <Form 
         input={input}
         setInput={setInput}
         todos={todos}
         setTodos={setTodos}
         editTodo={editTodo}
         setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
