import React from 'react'

function FormUserDetails ({ nextStep, handleChange, value})
{

function next(e) {
    e.prevent.default
    nextStep;
}
   

  return (
    <div>
         <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
            <form className="space-y-6">
                <input type="text"  required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='firstName'
                placeholder='Full Name'  />

                <input type="email" required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='email' 
                placeholder='Valid Email'  />

                <textarea type="email" required style={{height:200}} class="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='bio' 
                        placeholder='Comment'   />

                <input type="checkbox" className="text-sm font-medium leading-6 text-gray-900 px-4 py-2 bg-gray-300" name="terms" id="agreement" 
                 />

                <label htmlFor="agreement"className='text-sm font-medium leading-6 text-gray-900 px-4 py-2 bg'
                >Terms & Conditions</label>

                <button 
                onClick={() => next()}
                className="flex w-1/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm 
                font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-indigo-600 mt-8">
                    Next
                </button>

            </form>
         
        </div>
    </div>
  )
}

export default FormUserDetails 