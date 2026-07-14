import React, { Component } from "react";
export class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <>
        <h1>Welcome To class Components</h1>
        <h2>Counter App</h2>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment}>Increment(+)</button>
        <button onClick={this.reset}>Reset(0)</button>
        <button onClick={this.decrement}>Decrement(-)</button>
      </>
    );
  }
}
