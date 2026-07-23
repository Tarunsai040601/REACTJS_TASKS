import React, { Component } from "react";
export class Task_01 extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }
  HandlerClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.isActive ? "green" : "white",
            color: this.state.isActive ? "white" : "black",
            padding: "10px 20px",
            height:"100vh",
            width:"100vw"
          }}
        >
          <button onClick={this.HandlerClick}>
            {this.state.isActive ? "Inactive" : "Active"}
          </button>
        </div>
      </>
    );
  }
}
