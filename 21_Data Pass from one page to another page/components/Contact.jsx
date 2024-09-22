import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

function Contact() {
  const params=useParams();
  console.log(params);
  return (
    <>
    <div>love me</div>
    </>
  )
}

export default Contact