import React from 'react'

function ContextMenu({position,setData,rowId,setContextMenu}) {
  if(!position.left) return
  return (
    <div className='context-menu' style={position}>
      <div onClick={(e)=>{
        setContextMenu({});
        console.log('Editing');
      }}>Edit</div>
      <div onClick={(e)=>{
      setContextMenu({});
         setData((prevState)=>prevState.filter((expe)=>expe.id!=rowId))
      }}>Delete</div>
    </div>
  )
}

export default ContextMenu