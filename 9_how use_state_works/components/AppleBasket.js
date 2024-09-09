import React from 'react'

function AppleBasket({applecount,basketno,className}) {
  return (
    <div className={className}>
        <p>{applecount} apples</p>
        <p>Basket {basketno}</p>
    </div>
  )
}

export default AppleBasket