import React from 'react'

 const Button = (props) => {
  const {imageurl,className,title,click}=props;
return (
   <button onClick={click}  className={`button ${className}`} title={title}>
    <img className='button' src={imageurl} alt={title} />
    
   </button>
  )
}

export default Button;