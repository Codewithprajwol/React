import React from 'react'

function AppleBasket({applecount,basketno,className,children}) {
  // children()
  return (
    <div className={className}>
        <p>{applecount} apples</p>
        <p>Basket {basketno} 
          {applecount===10 && '(full)'}{applecount===0 && ' (empty)'} {(applecount>=5 && applecount!==10) &&'(hallfull)'}{/*this is called the conditional rendering */}
          {/* {if(applecount===10){("full")}} */}
          </p>
        {/* <p>{children}</p> */}
    </div>
  )
}

export default AppleBasket