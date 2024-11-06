import { Component } from "react";

class OldCounter extends Component {
    constructor(){
        super()
        this.timerId=null;
        this.state={
            count:0,
        }
        // console.log('constructor');
      }
      decreaseCount(){
        this.setState({count:this.state.count-1})
      }
    // componentDidMount(){
    //   console.log("componentDidMount");
    //  this.timerId= setInterval(()=>{
    //     console.log("i love you y very much")
    //   },2000)
    // }
    // componentDidUpdate(){
    //   console.log('componentDidUpdate');
    // }
    // componentWillUnmount(){
    //   clearInterval(this.timerId)
    //   console.log('componentWillUnmount');
    // }

    render(){
        console.log("render")
        const {des}=this.props
        const {count}=this.state
        return(
        <>
         <h1 id="old-counter-title" className="mt-5">{des}</h1>
        <h2 className="mb-5">{count}</h2>
      <button
        className="mr-3 rounded-[5rem] border-2 px-5 py-1"
        onClick={() =>this.setState({count:this.state.count+1})}
      >
        plus
      </button>
      {/* <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={this.decreaseCount.bind(this)}>minus</button> it can be do like this and also like below one */ }
      <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={function(){this.decreaseCount()}.bind(this)}>minus</button>
    </> 
    // actually using function() ..in my opinion takes liek button event handler ...but es6 arrow function takes parent this so it doesnot create problem
        )
    }
}
export default OldCounter;