//If you say how useState works then ....i would say that, useState works by maintaining an array ...and useState has two value on is normal value and another is function that is used to call or render the function again ..when ever funciton is called it use the current value and call function again executing the include code(what to do).. and update that array ...and when it is called again it takes the value from the array and use it.

//what about previous state ...react provide the callback function inside the useState ...function property where it doesnot use the normal value react automatically use the previous value from array and updates according to the code wiritten.

import React, { useState,Fragment } from 'react'
import styles from './Counter.module.css'
const state=[3,'prajwol shrestha how are you'];
// console.log(Fragment)
// console.log(Symbol.for('react-fragment'))
console.log(<fragment></fragment>)
console.log(typeof(Fragment))
console.log(styles)
function Counter({h1name, btnname,children:applecounter}) {
//  const usestate=useState(0)
//  const count=usestate[0]
//  const setcount=usestate[1]
  // console.log(count1)
      const [count, setCount]=useState(0)
      const [name, setname]=useState('Prajwol');

     const test= 
    //  <Fragment>
    <>
    <div>
        <h1 className={h1name}>{count}</h1>
        {/* <h2 className={styles['txt-xl']}>{name}</h2>bracket notation to access style with hyphens text  */}
        <h2 className={[styles.button, styles.txtXl].join(' ')}>{name}</h2>
        <button className={`${styles.button} ${btnname}`} onClick={()=>{
            // setCount(count + 1);
            // setname('prajwol shrestha')
            setname((previousState)=>previousState +' shrestha ');
            // setname((pre)=>pre+'how are you');
            setCount((previousState)=> previousState+ 1)//batch update it is called now it becomming 3,6,9,12 etc.
            setCount((previousState)=> previousState+ 1)
            setCount((previousState)=> previousState+ 1)
}}>Click to increase</button>
    </div>
    <p>hello boy</p>
    {/* {
      applecounter
    } */}
    {/* {console.log(applecounter)} it give undefined value*/}
       
    </>
    {/* </Fragment> */}  
  return test;
}

export default Counter