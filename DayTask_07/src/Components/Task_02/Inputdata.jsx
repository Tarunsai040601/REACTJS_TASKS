import React, { Component } from "react";

export class Inputdata extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      displayName: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  submitData = () => {
    this.setState({ displayName: this.state.name });
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            placeholder="Enter the string"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <button onClick={this.submitData}>Submit</button>
        </div>

        <div>
          <h1>Display Data: {this.state.displayName}</h1>
        </div>
      </>
    );
  }
}