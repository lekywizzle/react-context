import React from 'react';

const PhotoCard = ({ image }) => {


  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">

      <img src={image.src.medium} alt="" className="w-full"/>

     <div className='px-3 py-4 cursor-pointer flex text-center text-blue-900 justify-center text-xl font-semibold font-serif'>
      {image.photographer}
     </div>
    
    </div>
  )
}

export default PhotoCard;