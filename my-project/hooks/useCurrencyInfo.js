import React from 'react'
import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {

    const[data, setData] = useState({});

    useEffect(() => {
        fetch(``)
    }
    
    ,[currency])

  return (
    <div>useCurrencyInfo</div>
  )
}

export default useCurrencyInfo