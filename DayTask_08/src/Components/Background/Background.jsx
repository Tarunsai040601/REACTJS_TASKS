import React, { Component } from "react";
export class Background extends Component {
  constructor() {
    super();
    this.state = {
      Background: "white",
    };
  }
  handlerButton_1 = () => {
    this.setState({
      backgroundColor: "green",
      color: "red",
      fontStyle: "italic",
      textDecoration: "underline",
    });
  };
  handlerButton_2 = () => {
    this.setState({
      backgroundColor: "white",
      color: "black",
      fontStyle: "normal",
      textDecoration: "none",
    });
  };
  render() {
    return (
      <>
        <div>
          <h1
            style={{
              backgroundColor: this.state.backgroundColor,
              color: this.state.color,
              fontStyle: this.state.fontStyle,
              textDecoration: this.state.textDecoration,
            }}
          >
            welcome to react
          </h1>
          <button onClick={this.handlerButton_1}>Button_1</button>
          <button onClick={this.handlerButton_2}>Button_2</button>
        </div>
      </>
    );
  }
}
