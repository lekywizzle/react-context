import React, { useState } from 'react'
import {useTodo} from "../../context/index"

function TodoForm() {

 const [todo, setTodo] = useState("");
 const {addTodo} = useTodo()

 const add = (e) => {
  e.preventDefault()
  if (!todo) return
  addTodo({todo, completed: false})
  setTodo("")
 }

  return (

    <div className="flex min-h-full flex-col justify-center bg-gray-200  my-5 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={add} className="space-y-6">
                <input type="text"  required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='name'
                placeholder='Type in your Reminder' onChange={(e) => setTodo(e.target.value)} value={todo.message} />


                <button 
                type='submit'
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </form>
        </div>
       
    </div>
  )
}

export default TodoForm