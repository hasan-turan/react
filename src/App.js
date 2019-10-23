import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  categoryTitle = "Category List";
  productTitle = "Product List";
  state = {
    currentCategory: {},
    products: [],
    cart: []
  };
  componentDidMount() {
    this.getProducts();
  }
  categoryClick = category => {
    this.setState(
      {
        currentCategory: category
      },
      () => {
        this.getProducts(category.id);
      }
    );
  };
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) url += "?categoryId=" + categoryId;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            products: data
          },
          () => {
            console.log(
              "Url this.state.currentCategory Products  ",
              url,
              this.state.currentCategory,
              this.state.products
            );
          }
        )
      )
      .catch(error => console.log(error));
  };
  addToCart = product => {
    let newCart = this.state.cart;
    let exists = false;
    this.state.cart.forEach(c => {
      if (c.product.id === product.id) {
        c.quantity += 1;
        exists = true;
      }
    });
    if (!exists) {
      newCart.push({
        product: product,
        quantity: 1
      });
    }
    this.setState({
      cart: newCart
    });
    alertify.success(product.productName + " added to cart!", 2);
  };
  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({
      cart: newCart
    });
    alertify.error(product.productName + " product removed from cart!", 2);
  };
  render() {
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                categoryClick={this.categoryClick}
                currentCategory={this.state.currentCategory}
                title={this.categoryTitle}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      title={this.productTitle}
                      addToCart={this.addToCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/form1" component={FormDemo1} />
                <Route path="/form2" component={FormDemo2} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
