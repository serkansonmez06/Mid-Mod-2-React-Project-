import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap"; //import from reactstrap

class CategoryList extends Component {
  //ES6 no need constructor when we create state
  state = {
    categories: []
  };

  componentDidMount(){  //it will run one time// runs after the Component render and invoke the getCategories function inside here 
      this.getCategories(); 
  }

  getCategories = ()=>{
      fetch("http://localhost:3000/categories")  // it will fetch dummy data 
      .then(response=>response.json())   // promise -- response will convert to  json 
      .then(data=>this.setState({categories:data})); // setState updates initial state and added fetch data inside the categories array 
  }
 
  render() {
    return (
      <div>
        {/* -this- comes from Component -  */}
        <h3>{this.props.info.title}</h3>
         {/*ListGroup import from reactstrap */}
        <ListGroup>
          {this.state.categories.map(category => ( // map is array function. categories is array
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
            //active comes from bootstrap.. if categoryName and CcurrentCategory equal if will return (blue -selected)
              onClick={() => this.props.changeCategory(category)} // when we click list groupitem
              key={category.id} // each child component must have key id. 
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}


export default CategoryList