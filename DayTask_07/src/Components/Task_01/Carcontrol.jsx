import React, { Component } from 'react'
export class Carcontrol extends Component{
    constructor(){
        super();
        this.state={
            text:"Car stopped bro"
        }
    }
    changeMessage=()=>{
        this.setState({text:"car started bro"})
    }
    stopMessage=()=>{
        this.setState({text:"car stoped bro"})
    }
   render(){
    return(
        <>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeMessage}>Start</button>
        <button onClick={this.stopMessage}>Stop</button>
        </>
    )
   }
}