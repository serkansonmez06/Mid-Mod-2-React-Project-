import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap"; //import it from reactstrap
import CartSummary from "./CartSummary";

class Navi extends React.Component {



  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Food Shopping</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <CartSummary
              removeFromCart={this.props.removeFromCart} //remove item from cart
              cart={this.props.cart} //print cart in nav. it will get data from App
            />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navi;
