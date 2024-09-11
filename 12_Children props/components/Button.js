import React from 'react'

 const Button = (props) => {
  const {imageurl,className,title,click,children}=props;
return (
   <button onClick={click}  className={className} title={title}>
    <img src={imageurl} alt={title} />
    {children}
   </button>
  )
}

export default Button;