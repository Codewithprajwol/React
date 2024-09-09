import React from 'react'
import '../components/appleCounter.css'


function Renderbutton({classed,click}) {
  return (
    <button className={classed} onClick={click}>render</button>
  )
}

export default Renderbutton