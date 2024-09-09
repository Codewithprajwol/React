import React from "react";
import LeftArrow from "./assets/images/arrow.png"// why we have to do this because parcel change the name differently and we cannot access
import AppleCounter from "./components/AppleCounter";
 const App= ({root})=>{
    return <div className="wrapper">
       <AppleCounter  root={root}/>
    </div>
}

export default App;