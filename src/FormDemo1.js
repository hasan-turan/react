import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
    city: ""
  };
  onChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>User Name</h3>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.userName}
            name="userName"
          />

          <h3>City</h3>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.city}
            name="city"
          />
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
