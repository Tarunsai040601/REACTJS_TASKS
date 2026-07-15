import React, { Component } from "react";
export class UserInfo extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h1>UserInfo Data</h1>
        <h1>Name:{this.props.Name}</h1>
        <h2>Age:{this.props.Age}</h2>
        <h3>Location:{this.props.Location}</h3>
      </>
    );
  }
}
