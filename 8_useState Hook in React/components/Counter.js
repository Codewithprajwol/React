import React, { useState } from 'react'

function Counter({h1name, btnname}) {
 const usestate=useState(0)
//  const count=usestate[0]
//  const setcount=usestate[1]
  // console.log(count1)
  //     const[count, setCount]=useState(7)
     
  return (
    <div>
        <h1 className={h1name}>{usestate[0]}</h1>
        <button className={btnname} onClick={()=>{
          usestate[1](usestate[0]+1)
        }}>Click to increase</button>
    </div>
  )
}

export default Counter