import { Component } from "react";

class OldCounter extends Component {
    constructor(){
        super()
        this.timerId=null;
        this.state={
            count:0,
        }
        console.log('constructor');
    }
    componentDidMount(){
      console.log("componentDidMount");
     this.timerId= setInterval(()=>{
        console.log("i love you y very much")
      },2000)
    }
    componentDidUpdate(){
      console.log('componentDidUpdate');
    }
    componentWillUnmount(){
      clearInterval(this.timerId)
      console.log('componentWillUnmount');
    }

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
      <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={() => this.setState({count:this.state.count-1})}>minus</button>
    </>
        )
    }
}
export default OldCounter;