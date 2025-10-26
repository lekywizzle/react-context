import React from 'react'

export function Personal({step, nextSteps, handleChange, formData}) {
    const next = (e) => {
        e.preventDefault()
        if(formData.firstName === "") {
            return alert('Kindly input your Name')
           } 
           if(formData.email === "") {
            return alert('Kindly input your email')
           } 
           if(formData.bio === "") {
            return alert('Kindly input your Bio')
           } 
        nextSteps()
    }
    const prev = (e) => {
        e.preventDefault()
        prevSteps()
    }
  return (
    <div className='my-8 bg-gray-100 py-4'>
        <div>
            <h3 className="mt-5  w-full max-w-md mx-auto text-center 
            px-4 py-3 my-4 text-3xl font-bold text-gray-900">
                Personal Info
             </h3>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
            <form className="space-y-6">
                <input type="text"  required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='firstName'
                placeholder='Full Name' onChange={handleChange} value={formData.firstName}  />

                <input type="email" required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='email' 
                placeholder='Valid Email' onChange={handleChange} value={formData.email}/>

                <textarea type="email" required style={{height:200}} class="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='bio' 
                        placeholder='Comment' onChange={handleChange} value={formData.bio} />

                <button className={`${step === 3 ? 'hidden' : 'display'} block w-full m-0 rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`}  onClick={next}>
                        Continue
                </button>

            </form>
         
        </div>
    </div>
  )
}

export function UserList({step, nextSteps, prevSteps,formData,handleChange}) {
      const next = (e) => {
        e.preventDefault()
        if(formData.userName === "") {
            return alert('Kindly input your User Name')
           } 
           if(formData.phoneNumber === "") {
            return alert('Kindly input your Phone Number')
           } 
           if(formData.details === "") {
            return alert('Kindly input your Personal Details')
           } 
           nextSteps()
    }
    const prev = (e) => {
        e.preventDefault()
        prevSteps()
    }
    return (
        <div className='my-8 bg-gray-200 py-4'>
            <div>
                <h3 className="mt-5  w-full max-w-md mx-auto text-center 
                px-4 py-3 my-4 text-3xl font-bold text-gray-900">
                    User Data
             </h3>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
            <form className="space-y-6">
                <input type="text"  required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='userName'
                placeholder='User Name' onChange={handleChange} value={formData.userName} />

                <input type="text" required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='phoneNumber' 
                placeholder='Valid Phone Number' onChange={handleChange} value={formData.phoneNumber} />

                <textarea type="email" required style={{height:200}} class="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='details' 
                        placeholder='Comment Details' onChange={handleChange} value={formData.details}  />
                
                <div className="grid grid-cols-2 gap-4 m-0">
                    <button className={`${step === 3 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`}  onClick={next}>
                        Continue
                    </button>

                    <button className={`${step === 1 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`} onClick={prevSteps}>
                        Back
                    </button>
                </div>

            </form>
         
        </div>
      </div>
    )
  }

  export function MoRender({step, nextSteps,formData, prevSteps,handleChange}) {
    
    const next = (e) => {
        e.preventDefault()
        if(formData.address === "") {
            return alert('Kindly input your Address')
           } 
           if(formData.secondEmail === "") {
            return alert('Kindly input your Second Email')
           } 
           if(formData.bankDetails === "") {
            return alert('Kindly input your Bank Details')
           } 
           nextSteps()
    }
  
    return (
      <div className='my-8 bg-gray-300 py-4'>
        <div>
            <h3 className="mt-5  w-full max-w-md mx-auto  text-center 
            px-4 py-3 my-4 text-3xl font-bold text-gray-900">
                Contact Info
             </h3>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
            <form className="space-y-6">
                <input type="text"  required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='address'
                placeholder='Address' onChange={handleChange} value={formData.address} />

                <input type="email" required class="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='secondEmail' 
                placeholder='Second Email' onChange={handleChange} value={formData.secondEmail} />

                <textarea type="email" required style={{height:200}} class="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='bankDetails' 
                        placeholder='Bank Details'  onChange={handleChange} value={formData.bankDetails}  />

                <div className="grid grid-cols-2 gap-4 m-0">
                    <button className={`${step === 3 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`}  onClick={next}>
                        Continue
                    </button>

                    <button className={`${step === 1 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`} onClick={prevSteps}>
                        Back
                    </button>
                </div>

            </form>
         
        </div>
      </div>
    )
  }





  export function ConfirmationPage({step, nextSteps, prevSteps, handleSubmit,formData}) {
    return (
      <div className='my-8 bg-gray-100 py-4'>
        <h2 className='mt-5  w-full max-w-md mx-auto  text-center 
            px-4 py-3 my-4 text-2xl font-bold text-gray-900'>Confirmation Page</h2>
            <hr  className='shadow-slate-800 mb-6'/>
            <p className=' block text-center px-5 font-semibold text-indigo-900 text-xl mb-10'>Kindly Confirm your details before Submitting</p>
            <hr  className='shadow-slate-800 mb-12'/>
        <div>
          <ul className='flex flex-wrap flex-col justify-items-start '>
            <li> <span className='text-xl font-semibold'>First Name : </span> <span className='italic text-xl'> {formData.firstName}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Email : </span><span className='italic text-xl'>{formData.email}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Bio : </span><span className='italic text-xl'>{formData.bio}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>User Name : </span><span className='italic text-xl'>{formData.userName}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Phone : </span><span className='italic text-xl'>{formData.phoneNumber}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Details : </span><span className='italic text-xl'>{formData.details}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Address : </span><span className='italic text-xl'>{formData.address}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Second Email : </span><span className='italic text-xl'>{formData.secondEmail}</span></li>
            <br/>
            <li> <span className='text-xl font-semibold'>Bank Account Details : </span><span className='italic text-xl'>{formData.bankDetails}</span></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mx-12 px-12">
                    <button className={`${step === 3 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`}  onSubmit={handleSubmit}>
                       Submit
                    </button>

                    <button className={`${step === 1 ? 'hidden' : 'display'} rounded-md bg-indigo-600 px-6 py-1.5 text-sm 
                        font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600 mt-8`} onClick={prevSteps}>
                        Back
                    </button>
                </div>

      </div>
    )
  }

