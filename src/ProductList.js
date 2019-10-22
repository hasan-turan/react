import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.currentCategory.categoryName
            ? this.props.title +
              " of " +
              this.props.currentCategory.categoryName
            : this.props.title}
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Qunatity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice} </td>
                <td>{product.quantityPerUnit} </td>
                <td>{product.unitsInStock} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
