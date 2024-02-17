import React, { useState } from 'react'

function Prajwol({}) {
    const [a,b]=useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
        <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" :"hey"}</h4>
        <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}

export default Prajwol