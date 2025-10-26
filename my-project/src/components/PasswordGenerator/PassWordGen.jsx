import React from 'react'
import {useState,useCallback,useEffect, useRef} from 'react'

function PassWordGen()
{

    const[length,setLength] = useState(8);
    const[addNumber,setAddNumber] = useState(true);
    const[addChar,setAddChar] = useState(false);
    const[password, setPassword]= useState();
    const [btnText, setBtnText] = useState('Copied')

    const passwordRef = useRef(null)

    const generatePassword = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


        if(addNumber) str += "0123456789"
        if(addChar) str += "!@£$%^&*()_+"

        for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1) 
        pass += str.charAt(char)
        }

        setPassword(pass)

    },[length, addNumber, addChar])


    const copyText = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
    }


    useEffect(()=> {
        generatePassword();
    },[length, addNumber, addChar])


  return (
    
        <div className="container w-full block my-10">
          
          <div className='flex items-center text-center rounded-l-lg  overflow-hidden mx-20'>
            <input 
            className='outline-none bg-gray-200 w-full py-2 px-3'
            type="text"
            value={password}
            ref={passwordRef}
            placeholder='Password'
            readOnly  
            />

            <button onClick={copyText} className='bg-indigo-600 text-white  hover:bg-indigo-500 px-3 py-2 rounded-r-md'>
              Copy
            </button>
          </div>

         <div className="flex flex-row justify-center my-5 text-sm gap-x-2">

          <div className='flex items-center gap-x-3 '>
              <label className='font-bold' htmlFor="length">Length : {length}</label>
              <input type="range" 
              name="Range"
              min={6}
              id='length'
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label className='font-bold' htmlFor="addNumber">Add Number</label>
                <input 
                  type="checkbox" 
                  defaultChecked={addNumber}
                  onChange={() => {
                    setAddNumber((prev) => !prev)
                  }}
                  id='addNumber'
                  // className='basis-1/4 flex-auto w-32 mx-0'
                />
            </div>
            <div className="flex items-center gap-x-3 ">
              <label className='font-bold' htmlFor="addChar">Add Character</label>
                <input
                    type="checkbox" 
                    defaultChecked={addChar}
                    onChange={() => {
                      setAddChar((prev) => !prev)
                    }}
                    id='addChar'
                    // className='basis-1/4 flex-auto items-center gap-x-1 w-32 mx-0'
                />
            </div>
         </div>
        </div>
    
  )
}

export default PassWordGen