import React from 'react'

function Die({value, id, isHeld,holdDice}) {
  
  const held = isHeld ? "bg-green-300" : "bg-slate-50"


  return (
    <div onClick={holdDice} className={ `font-semibold text-3xl py-4 ${held} cursor-pointer rounded-md` } id={id}>{value}</div>
  )
}

export default Die