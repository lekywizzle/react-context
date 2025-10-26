import React from 'react'
import { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard';
import { resolvePath } from 'react-router-dom';






function Photo() {
    const[images, setImages] = useState([]);
    const[term, setTerm] = useState();
    const[err, setErr] =  useState(false)

    
    useEffect(() => {

    //   const getPexels = async () => {
      
    //   const url = 'https://api.pexels.com/v1/search?query=people'
       
    //    const response = await fetch(url, {
    //     method : 'GET',
    //     headers: {
    //         Authorization: 'SeMYkJylgZTIyv5cOY1xtZ5JceXmOhvXaw1LOCzoKyRRcWLjWmkTPQKr', 
    //     },
    //    })

    //    const data = await response.json()

    //    console.log(data.photos)

    //   setImages(data.photos)
    // }
    //  getPexels();


    function fetchData() {
      return new Promise((resolve, reject) => {
        let options = { 
          method: 'GET', 
          headers: new Headers({ 
            Authorization: 'SeMYkJylgZTIyv5cOY1xtZ5JceXmOhvXaw1LOCzoKyRRcWLjWmkTPQKr' 
          }) 
        };
        debugger
        fetch('https://api.pexels.com/v1/search?query=people', options)
        .then(res => res.json())
        .then(data => resolve(data.photos))
        })
    }

    
    fetchData();

    const displayData = (data) => {
      setImages(data)
    }

   const errDisplay = (err) =>  {
      setErr(true)

   }
 
    fetchData()
    .then(displayData, errDisplay)
    





    }, [])



  return (
    <div  className='mb-20'>

      <div>
        <h1 className='mt-4 mb-4 pt-4 pb-8 font-extrabold text-blue-950 text-4xl font-serif'>PHOTO PAGE</h1>
      </div>

      <div>

           {err === true ? 

           <div className='flex text-center justify-center w-auto mx-60'>
             <img 
            src='https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg'
            alt="404 Page"
            
            />
           </div>
           
           
           : 
           
           <div className='grid grid-cols-3 gap-4'>
              {
                images.map(
                (image) => ( <PhotoCard image={image} key={image.id} />))
              }
           </div>
           
           } 

          
          
        
          
        
        </div>
       
    </div>
  )
}

export default Photo