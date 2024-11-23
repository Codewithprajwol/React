import React, { useEffect, useState } from "react";

function NewCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('ma chalyaaa hai');
    const timerId=setInterval(()=>{// this is called clean up function
      console.log('i love you very much');
    },1000)

    return ()=>{
      clearInterval(timerId);
    }
  },[])
  return (
    <>
        <h1 id="new-counter-title">{props.des}</h1>
      <h2 className="mb-5">{count}</h2>
      <button
        className="mr-3 rounded-[5rem] border-2 px-5 py-1"
        onClick={() => setCount(count + 1)}
      >
        plus
      </button>
      <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={() => setCount(count - 1)}>minus</button>
    </>
  );
}

export default NewCounter;
