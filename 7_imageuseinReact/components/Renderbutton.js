import React from 'react'

function Renderbutton({classed,click}) {
  return (
    <button className={classed} onClick={click}>render</button>
  )
}

export default Renderbutton