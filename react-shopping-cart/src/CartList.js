import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem => ( //map will itirate each item and will create new array 
            <tr key={cartItem.product.id}>
              {/** each child component must have key */}
              <td>{cartItem.product.id}</td>
               {/** display new array(cartItem) items in tbody */}
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                   // onclik function will remove item from cartItem page
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}

export default CartList