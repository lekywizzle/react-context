import React, { useEffect } from 'react'
import {TodoProvider}  from "../../context/index"
import TodoForm from "./TodoForm"
import TodoItems from "./TodoItems"
import { useState } from 'react'

function Todo() {

    const[todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo)=> prevTodo.id 
        === id ? todo : prevTodo))
    }

    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.complete} : prevTodo ) ))
    }

    useEffect(() => {
       const todos = JSON.parse(localStorage.getItem('todos'))
       if(todos && todos.length > 0) {
        setTodos(todos)
       }
    },[])

    useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos))
      }
   ,[todos])

  return (
    <TodoProvider value={{
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete 
    }}>
        <h2 className='font-extrabold text-4xl px-5 py-10 '>Todo Reminder</h2>

       <TodoForm />

       {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItems todo={todo} />
        </div>
         
       ))
       }

    </TodoProvider>
  )
}

export default Todo