import React from 'react'
import { createPortal } from 'react-dom'

function Modal({isOpen,setIsOpen,header,footer,children}) {
  return createPortal (
    <div onClick={()=>{setIsOpen(false)}} className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isOpen ? "" :'hidden'}`}>
      <div onClick={(e)=>{e.stopPropagation()}} className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
       {header}
       {children}
       {footer}
      </div>
    </div>,
  document.getElementById('portal')
  )
}

export default Modal