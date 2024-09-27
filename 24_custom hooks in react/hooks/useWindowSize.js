import { useEffect, useState } from "react";

export function useWindowSize(){

   const [windowSize,setWindowSize]=useState({
    width: window.innerWidth,
    height: window.innerHeight
   })
  useEffect(()=>{ // if we want to show this details in another page or component we will have to copy and paste the whole code .....so to avoid that we create our own Custom Hooks
    window.addEventListener('resize',()=>{
    setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight 
    })
    })
  },[])

  return windowSize
}