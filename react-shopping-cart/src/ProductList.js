import React, { Component } from "react";
import { Table,Button } from "reactstrap"; //import from reactstrap in order to use table

class ProductList extends Component {
 
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory} 
          {/** it will display product title and currentcategory */}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th> 
              {/**title of product table */}
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => ( //reach products inside App component and use map function 
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td> 
                {/*each item names comes from json file. make sure names match with json file..productName exc. */}
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td>
                {/* Button comes from reactstrap and onClick function runs */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}


export default ProductList