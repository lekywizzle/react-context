import React from 'react'

function currencyAppTemplate({

        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectedCurrency="usd",
        amountDisabled= false,
        currencyDisabled =  false,
        className = "",


})


{



  return (


    <div className={`${className}`}>
        <div className="">
            <label>{label}</label>
            <input 
            type="number"
            className=''
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange ={(e) => {onAmountChange &&  onAmountChange(Number(e.target.value))}} 

            />
        </div>

        <div className="">
            
            <p>Currency Type</p>

            <select
            name=""
            value={selectedCurrency}
            onChange={()=> {onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled ={currencyDisabled}
            >
                
                    {currencyOptions.map((currency) => 
                    (
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
            
            </select>

        </div>

    </div>
  )
}

export default currencyAppTemplate