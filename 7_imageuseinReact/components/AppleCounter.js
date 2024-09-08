//Declarative Programming -Don't need to update the DOM ...when declaering the variable and updating the varible is only needed ....React automatically updates the required DOM.
import React, { useState } from 'react'
import LeftArrow from '../assets/images/arrow.png'
import RigthArrow from '../assets/images/right-arrow.png'
import Button from './Button'
import AppleBasket from './applebasket'
import '../components/appleCounter.css'
import Renderbutton from './Renderbutton'
import Counter from './Counter'


let rightAppleCount=0;
let totalAppleCount=10;
let leftAppleCount=totalAppleCount-rightAppleCount;

const AppleCounter = ({root}) => {
  // const [count,setcount]=useState(0)
  // console.log(count);
   const leftclickevent=()=>{
     if(rightAppleCount>0){
       rightAppleCount--;
       leftAppleCount++;
       root.render(<AppleCounter root={root} />)
     }
     console.log(rightAppleCount)
     console.log(leftAppleCount)
       
   }
   const rightclickevent=()=>{
    if(leftAppleCount>0){
      rightAppleCount++;
      leftAppleCount--;
      root.render(<AppleCounter root={root} />)
    }
    console.log(rightAppleCount)
    console.log(leftAppleCount)
   }
  return (
    <>
        
        <Counter h1name='hi' btnname='btn'/>
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