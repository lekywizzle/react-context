import React from 'react'
import {useTodo} from '../../context/index'

function TodoItems({todo}) {



  const {deleteTodo} = useTodo();

  const deleteItem = (id) => {
    deleteTodo(todo.id)
  }


  return (
    <div className='bg-gray-300 my-4 px-6 py-8 flex flex-row text-center'>
      <div className='text-left grow h-14'>
        <h2 className='text-3xl capitalise font-bold  font-mono hover:font-serif pb-4 '>{todo.todo}</h2>
        <p className='font-mono font-bold text-gray-700'>{todo.id}</p>
      </div>
      <div className=' grow-0'>
       <p  onClick={deleteItem} className='cursor-pointer '>X</p> 
      </div>
    </div>
  )
}

export default TodoItems 