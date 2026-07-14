import React, { Component } from "react";
export class InputValues extends Component {
  constructor() {
    super();
    this.state = {
      data1: "",
      data2: "",
      output:""
    };
  }
  handler1(e) {
    this.setState({ data1: e.target.value });
  }
  handler2(e) {
    this.setState({ data2: e.target.value });
  }
  handlerSubmit = () => {
    this.setState({output:this.state.data1 + this.state.data2});
  };
  render() {
    return (
      <>
        <h1>Joining two input values</h1>
        <input
          type="text"
          placeholder="enter first name"
          required
          onChange={(e) => this.handler1(e)}
        />
        <input
          type="text"
          placeholder="enter first name"
          required
          onChange={(e) => this.handler2(e)}
        />
        <button onClick={this.handlerSubmit}>submit</button>
        <h1>FirstName:{this.state.data1}</h1>
        <h1>SecondName:{this.state.data2}</h1>
        <div>
            <h2>The final name:{this.state.output}</h2>
        </div>
      </>
    );
  }
}
