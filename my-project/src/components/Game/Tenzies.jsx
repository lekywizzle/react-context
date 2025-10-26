import React, { useEffect } from 'react'
import { useState } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'

function Tenzies() {

    

     const[dice,setDice] = useState(newDice())
     const[tenzies,setTenzies] = useState(false)


     useEffect(() => {
        
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameVal = dice.every(die => die.value === firstValue)

        if(allHeld && allSameVal) {
            setTenzies(true)
        } else {
            setTenzies(false)
        }

     }, [dice])
     


    function generateNewDice() {
        return {
            value : Math.floor((Math.random() * 6) + 1),
            id : nanoid(),
            isHeld : false
        }
    }


    function newDice() {
        const newDiceArray = []

        for (let i = 0; i < 10 ; i++) {

            newDiceArray.push(generateNewDice())
        }

        return newDiceArray;
    } 


    function rollDice() {
        if(!tenzies) {
            return setDice((prev) => (prev.map(die => {
                return die.isHeld ? die : generateNewDice()
            }) ))
        } else {
            setTenzies(false)
            setDice(newDice())
        }
    }

    function holdDice(id) {
        setDice((prev) => prev.map((die) => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }

   const displayDice = dice.map(die => (<Die value={die.value} isHeld={die.isHeld}  holdDice={() => holdDice(die.id)} />)) 



  return (
    <div>
        <div>
            <h2 className="text-4xl mt-8 px-5 py-8 font-bold">Tenzies Games</h2>
            <h3 className={`${tenzies === true ? "block" : "hidden"} text-xl mb-6 font-semibold`}>Congrats! You Won!</h3>
        </div>
        <div className='grid grid-cols-5 gap-4 justify-center m-auto align-middle text-center w-1/2 bg-gray-300 px-12 py-6 mb-8'>
            {displayDice}
            
        
        <button onClick={rollDice} className='block w-full text-center px-8 py-2  rounded-sm bg-slate-600 text-sm font-semibold
         text-white hover:bg-slate-500'>
            {tenzies === true ? "Restart" : "Roll"}
        </button>
            
        </div>
    
    
    
    </div>
  )
}

export default Tenzies