import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList"; //import
import { Container, Row, Col } from "reactstrap"; //import from reactstrap.
import alertify from "alertifyjs"; // import from alertifyjs
import { Route, Switch } from "react-router-dom";
import CartList from "./CartList"; //import


class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }; 

  componentDidMount() { //invoke getProducts 
    this.getProducts();
  }

  changeCategory = category => {// call getProducts and gets fetch data
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => { // fetch products data. categoryId comes from json file 
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => { //this method add items to cart
    let newCart = this.state.cart; 
    var addedItem = newCart.find(c => c.product.id === product.id); // 
    if (addedItem) {  //if same item is in the cart add quantity +1.. if same item is in the cart it wont new item, it will change quantity of item
      addedItem.quantity += 1;
    } else { //else add new item in cart
      newCart.push({ product: product, quantity: 1 }); //push new items with 1 in newCart
    }

    this.setState({ cart: newCart }); //added newCart to cart
    alertify.success(product.productName + " added to cart!"); // add alertify.success() box when user add item
  };

  removeFromCart = product => { // it will remove item from newCart
    let newCart = this.state.cart.filter(c => c.product.id !== product.id); //   it will filter by product id and it will keep it if product id is same if it is not will filter it and remove
    this.setState({ cart: newCart }); //rerenders cart, removes item and creates new array
    alertify.error(product.productName + " removed from cart!"); //alertify.error() box will display with product name ahen it removes
  };

  render() {
    let productInfo = { title: "ProductList" }; // titles ccome from here
    let categoryInfo = { title: "CategoryList" }; //we created object and encapsulated makes easy to add title. we can add as much title here. clear code
    return (
      <div>
        <Container>
          {/*Container and Row come from reactstrap */}
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            {/* Col comes from reactstrap.. it divides row 12 columns. 3 means 3 column together */}
            <Col xs="3">
              <CategoryList
               //currentCategory comes from App state. thats why we use this.state
                currentCategory={this.state.currentCategory} //want reach state currentCategory in order to reach in child component we need the reach first at main component 
                changeCategory={this.changeCategory}// pass changeCategory() to Category list we need to pass in App first then reach at the child component
                info={categoryInfo}
              />
            </Col>
             {/* Col comes from reactstrap.. it divides row 12 columns. 9 means merges 9 column together */}
            <Col xs="9">
              <Switch>  {/** switch will check each path */}
                <Route
                  exact
                  path="/" //route to productlist path
                  render={props => ( //render will route productlist 
                    <ProductList
                      {...props} //means take all properties assigned to props
                      products={this.state.products} // fetch data, stored in state produts and print inside ProductList
                      addToCart={this.addToCart} //will display addToCart
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart" //route to cart page
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
               
             
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App