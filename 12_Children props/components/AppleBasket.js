import React from 'react'

function AppleBasket({applecount,basketno,className,children}) {
  children()
  return (
    <div className={className}>
        <p>{applecount} apples</p>
        <p>Basket {basketno}</p>
        {/* <p>{children()}</p> */}
    </div>
  )
}

export default AppleBasket