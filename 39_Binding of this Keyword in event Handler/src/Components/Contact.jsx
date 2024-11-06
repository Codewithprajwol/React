import React, { useState } from 'react'
import Modal from './Modal';

function Contact(header,footer,children) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <h1>Contact me</h1>
    <button onClick={()=>{setIsOpen(true)}}>Open Popup</button>
    <Modal  header={<div className="text-fuchsia-400">I love you yashi.</div>}   footer={<h3 className='text-pink-400'>I hope you love me too.</h3>} isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className='text-green-600'>your future Husband Prajwol Shrestha for sure.</h2>
    </Modal>
    </>
  )
}

export default Contact