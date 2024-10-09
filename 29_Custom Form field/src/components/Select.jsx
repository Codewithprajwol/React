import React from 'react'

function Select({category,id,name,value,error,onchange,options,defaultOption}) {
  return (
    <div className="input-container">
    <label htmlFor={id}>{category}</label>
    <select id={id} name={name} value={value} onChange={onchange}>
                  {defaultOption && <option hidden value="">{defaultOption}</option>
                  }
              {options.map((option,index)=><option key={index} value={option}>{option}</option>)}
            </select>
  <p className='error-part'>{error}</p>
  </div>
  )
}

export default Select