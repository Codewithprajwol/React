import React, { useState } from 'react'
import LeftArrow from '../assets/images/arrow.png'
import RigthArrow from '../assets/images/right-arrow.png'
import Button from './Button'
import AppleBasket from './applebasket'
// import '../components/appleCounter.css'
import Renderbutton from './Renderbutton'

const AppleCounter = () => {
  
  const totalAppleCount=10;
  const [leftAppleCount,setLeftAppleCount]=useState(0);
  const [rightAppleCount,setRightAppleCount]=useState(totalAppleCount-leftAppleCount);
  const data='render'
  // console.log(leftAppleCount)
   const leftclickevent=()=>{
     if(rightAppleCount>0){
        setRightAppleCount(rightAppleCount-1);
        setLeftAppleCount(leftAppleCount+1);
     }
     console.log(rightAppleCount)
     console.log(leftAppleCount)
       
   }
   const rightclickevent=()=>{
    if(leftAppleCount>0){
      setRightAppleCount(rightAppleCount+1);
      setLeftAppleCount(leftAppleCount-1);
    }
   }
  return (
    <>  
    <div className='wrapper-2'>
        <AppleBasket className='basket-1' applecount={leftAppleCount} basketno="1" />
        <Button click={leftclickevent} className="left-basket-img" imageurl={LeftArrow} title="leftarrow" />
        <Button click={rightclickevent} className="Right-basket-img" imageurl={RigthArrow} title="rightarrow" />
        <AppleBasket className='basket-2' applecount={rightAppleCount} basketno="2" />
    </div>
     
    </>
  )
}

export default AppleCounter