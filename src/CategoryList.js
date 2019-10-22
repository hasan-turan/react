import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: []
  };
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data =>
        this.setState({
          categories: data
        })
      )
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.props.categoryClick(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
