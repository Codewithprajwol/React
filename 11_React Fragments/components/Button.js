import React from 'react'

 const Button = (props) => {
  const {imageurl,className,title,click}=props;
return (
   <button onClick={click}  className={className} title={title}>
    <img src={imageurl} alt={title} />
   </button>
  )
}

export default Button;