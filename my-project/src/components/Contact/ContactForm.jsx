import React, { useEffect, useState } from 'react'
import { Personal, UserList, MoRender, ConfirmationPage } from './formRender'

function ContactForm() {

    const[step, setStep] = useState(1)

    const[formData, setFormData] = useState({
        firstName:'',
        email:'',
        bio: '',
        userName:'',
        phoneNumber:'',
        details:'',
        address:'',
        secondEmail:'',
        bankDetails:''
    })


    const handleChange = (e) => {
        const {name,value, type} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
    }


    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData))
         }
      ,[formData])
    

    const prevSteps = () => {
        if(step >= 1){
            setStep(prevStep => prevStep - 1)
        } 

    }

    const nextSteps = () => {
        if(step <= 3){
            setStep(prevStep => prevStep + 1)
        }
    }

    const renderSteps = () => {
        switch (step) {
            case 1:
                return  <Personal 
                            step={step}
                            prevSteps={prevSteps}
                            nextSteps={nextSteps}
                            handleChange={handleChange}
                            formData={formData}
                    />

            case 2:
                return <UserList 
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                handleChange={handleChange}
                formData={formData}

                    />

            case 3:
                return <MoRender
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                handleChange={handleChange}
                formData={formData}

                />

            case 4:
                return <ConfirmationPage
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                handleChange={handleChange}
                formData={formData}

                />
        
            default: return null
            
        }
    }

  return (

    <>

     <div className='mb-12 mx-12 px-12'> 

        {/* <div className = {`${step >= 1 ? "display" : "hidden"}`} >Step One</div>
        <div className = {`${step >= 2 ? "display" : "hidden"}`} >Step Two</div>
        <div className = {`${step >= 3 ? "display" : "hidden"}`} >Step Three</div> */}

        <div>
            {renderSteps()} 
        </div>

     </div>

    </>
    
  )
}

export default ContactForm