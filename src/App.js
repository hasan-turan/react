import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
export default class App extends Component {
  categoryTitle = "Category List";
  productTitle = "Product List";
  state = {
    currentCategory: {},
    products: []
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
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                categoryClick={this.categoryClick}
                currentCategory={this.state.currentCategory}
                title={this.categoryTitle}
              />
            </Col>
            <Col xs="9">
              <ProductList
                currentCategory={this.state.currentCategory}
                products={this.state.products}
                title={this.productTitle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
