import React from 'react'
import NewCounter from './NewCounter'
import OldCounter from './OldCounter'

function Home() {
  return (
    <>
    <h1>Welcome to our home</h1>
    <NewCounter des="This is a new functional based Counter" />
    <OldCounter des="This is a Class Based Counter" />
    </>
  )
}

export default Home