import React from "react";
import LeftArrow from "./assets/images/arrow.png"// why we have to do this because parcel change the name differently and we cannot access
import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter"
 const App= ()=>{
    return <div className="wrapper">
     <Counter h1name='hi' btnname='btn'></Counter> 
       <AppleCounter />
     
    </div>
}

export default App;