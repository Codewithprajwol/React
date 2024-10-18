import React from 'react'

function ContextMenu({position,setData,rowId,setContextMenu,setExpenses,expenses,setEditingRowId}) {
  if(!position.left) return
  return (
    <div className='context-menu' style={position}>
      <div onClick={(e)=>{
        setContextMenu({});
        setEditingRowId(rowId);
       const {title,category,amount}=expenses.find((exp)=>exp.id===rowId)
        setExpenses({title,category,amount})
      }}>Edit</div>
      <div onClick={(e)=>{
      setContextMenu({});
         setData((prevState)=>prevState.filter((expe)=>expe.id!=rowId))
      }}>Delete</div>
    </div>
  )
}

export default ContextMenu