import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component{
  
    render(){
      return(
      <h2 onMouseEnter={this.props.increaseCount} className="cursor-pointer text-xl bg-yellow-500">{this.props.count}</h2>
    )}
}
export default withCounter(HoverCounter);