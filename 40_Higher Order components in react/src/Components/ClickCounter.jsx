import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

    render(){
       
        console.log(this.props)
        return(
        <>
        <h2 onClick={this.props.increaseCount} className="mb-5 cursor-pointer bg-pink-500 text-xl">{this.props.count}</h2>
        
      
    </> 
        ) 
    }
}
export default withCounter(ClickCounter);