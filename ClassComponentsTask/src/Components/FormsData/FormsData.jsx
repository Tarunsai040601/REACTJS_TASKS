import React, { Component } from "react";
import "./FormsData.css";

export class FormsData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      role: "",
      users: [],
    };
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ users });
  }

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = () => {
    const { name, email, role } = this.state;

    if (!name || !email || !role) {
      alert("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name,
      email,
      role,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      users,
      name: "",
      email: "",
      role: "",
    });
  };

  render() {
    return (
      <>
        <div className="FormContainer">
          <h1>User Data</h1>

          <div className="FormStyle">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handlerChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handlerChange}
            />

            <label>Role:</label>
            <input
              type="text"
              name="role"
              placeholder="Enter Role"
              value={this.state.role}
              onChange={this.handlerChange}
            />
          </div>

          <button className="SubmitBtn" onClick={this.handlerSubmit}>
            Submit
          </button>

          <h2>User List</h2>

          {this.state.users.length === 0 ? (
            <p>No Users Found</p>
          ) : (
            this.state.users.map((user, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
              </div>
            ))
          )}
        </div>
      </>
    );
  }
}