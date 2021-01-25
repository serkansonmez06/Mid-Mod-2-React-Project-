import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap"; //importted from reactstrap

class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => ( //props from Nav . and map each item in the cart and create new array
            <DropdownItem key={cartItem.product.id}> 
            {/* added key to child component */}
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge> 
                {/** it will remove item in cart when you click on X, color cames from bootstrap*/}
              {cartItem.product.productName} 
              <Badge color="success">{cartItem.quantity}</Badge> 
              {/* it will add quantity of each items in cart. Badge is from reactstrap */}
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
              <Link to="cart">Go To Cart</Link> 
              {/* it link to cart page.. link will come from router react*/}
          </DropdownItem> 
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() { // this method just return empty cart. 
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}</div>
         //if length is bigger than zero it will render renderSummary and print it. if not it will print renderEmptyCart
      );
  }
}

export default CartSummary