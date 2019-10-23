import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary = () => {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Carts
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map(c => (
              <DropdownItem key={c.product.id}>
                <Badge
                  color="danger"
                  onClick={() => this.props.removeFromCart(c.product)}
                >
                  X
                </Badge>
                {c.product.productName}
                <Badge color="success">{c.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="cart">Go to cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  };
  renderEmptyCart = () => {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  };
  render() {
    return this.props.cart.length > 0
      ? this.renderSummary()
      : this.renderEmptyCart();
  }
}
