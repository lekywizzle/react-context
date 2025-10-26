import ContactForm from './ContactForm'


function Contact() {

  


  return (
    <div>
      <h1 className="mt-5 w-full max-w-md mx-auto shadow-md text-center 
      px-4 py-3 my-8 text-3xl font-bold text-gray-900">
        Contact
      </h1>
      <div className="container">

        <ContactForm />
      
        
      </div>
    </div>
  )
}

export default Contact