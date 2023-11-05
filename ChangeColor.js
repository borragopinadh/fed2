import React , { Component } from 'react'
class ColorChange extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'#FF0FF0',
    }
  }
  redHandler=()=>{
    this.setState({color:'#FF0000'});
  }
  greenHandler=()=>{
    this.setState({color:'#00FF00'});
  }
  blueHandler=()=>{
    this.setState({color:'#0000FF'});
  }
  render(){
    return(
      <div>
        <h1 style={{color:this.state.color}}>gopinadh</h1>
        <button type="button" 
        onClick={this.redHandler}>Red Color</button>
        &nbsp;&nbsp;
        <button type="button" 
        onClick={this.greenHandler}>Green Color</button>
        &nbsp;&nbsp;
        <button type="button" 
        onClick={this.blueHandler}>Blue Color</button>
        &nbsp;&nbsp;
      </div>
    )
  }
}

export default ColorChange;