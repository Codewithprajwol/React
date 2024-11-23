import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function Home() {
  return (
    <>
    <h1>Welcome to our home</h1>
    <ClickCounter love='Radha' />
    <HoverCounter />
    </>
  )
}

export default Home