import { Component } from "react";

class OldCounter extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            count2:0,
        }
        console.log("constructor")// it will run only onetime while render runs multiple time when state changes
    }
    render(){
        console.log("render")
        const {des}=this.props
        const {count,count2}=this.state
        return(
        <>
         <h1 className="mt-5">{des}</h1>
        <h2 className="mb-5">{count}</h2>
      <button
        className="mr-3 rounded-[5rem] border-2 px-5 py-1"
        onClick={() =>this.setState({count:this.state.count+1})}
      >
        plus
      </button>
      <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={() => this.setState({count:this.state.count-1})}>minus</button>

      <h2 className="mb-5">{count2}</h2>
      <button
        className="mr-3 rounded-[5rem] border-2 px-5 py-1"
        onClick={() =>this.setState({count2:this.state.count2+1})}
      >
        plus
      </button>
      <button className="mr-3 rounded-[5rem] border-2 px-5 py-1" onClick={() => this.setState({count2:this.state.count2-1})}>minus</button>
    </>
        )
    }
}
export default OldCounter;