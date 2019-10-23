import React, { Component } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    alertify.success("Save operation is success!", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Select city"
              value={this.state.description}
              onChange={this.onChange}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Adana</option>
            </Input>
          </FormGroup>
          <Button type="submit" className="btn btn-success">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
