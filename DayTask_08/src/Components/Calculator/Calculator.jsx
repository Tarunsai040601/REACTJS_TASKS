import React, { Component } from "react";
export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      number1: "",
      number2: "",
      sum:0
    };
  }
  handlernumber1(e) {
    console.log(e.target.value);
    this.setState({ number1: e.target.value });
  }
  handlernumber2(e) {
    this.setState({ number2: e.target.value });
  }
  handlerSubmit = () => {
    this.setState({
      sum:Number(this.state.number1) + Number(this.state.number2),
   } );
  };
  render() {
    return (
      <>
        <h1>The sum of the two numbers:{this.state.sum}</h1>
        <div>
          <input
            type="number"
            placeholder="enter a number"
            required
            onChange={(e) => this.handlernumber1(e)}
          />
          <input
            type="number"
            placeholder="enter a number"
            required
            onChange={(e) => this.handlernumber2(e)}
          />
        </div>
        <br />
        <div>
          <button onClick={this.handlerSubmit}>submit</button>
        </div>
      </>
    );
  }
}
