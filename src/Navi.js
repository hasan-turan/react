import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import CartSummary from "./CartSummary";
import { withRouter } from "react-router-dom";

class Navi extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
    this.setState({
      isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="link"
                  onClick={() => this.props.history.push("/form1")}
                >
                  Form Demo 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  onClick={() => this.props.history.push("/form2")}
                >
                  Form Demo 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Navi);
