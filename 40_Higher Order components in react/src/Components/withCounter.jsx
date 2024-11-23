import { Component } from "react";

const withCounter=(WrappedComponent)=>{
    return class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                count:0,
            }
          }
          increaseCount=()=>{
            this.setState({count: this.state.count+1});
          }
        render(){
            return (<WrappedComponent count={this.state.count} increaseCount={this.increaseCount} hello="hello world" {...this.props}/>)
        }
    }
}

export default withCounter;