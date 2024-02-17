import React, { useState } from 'react'
import Prajwol from './Prajwol'

function App() {
  var[a,b]=useState(1)
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <Prajwol age="19" data={{age:19, name:"prajwol"}} />
    </div>
  )
}

export default App