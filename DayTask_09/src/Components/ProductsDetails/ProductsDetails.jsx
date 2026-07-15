import React, { Component } from "react";
import "./ProductDetails.css";

export class ProductDetails extends Component {
  render() {
    return (
      <>
        <h1 className="heading">
          {this.props.data || this.props.data_1}
        </h1>

        <div className="products-container">
          {this.props.Details.map((items, index) => (
            <div className="product-card" key={index}>
              <img
                src={items.thumbnail}
                alt={items.title}
                className="product-image"
              />

              <h2>{items.title}</h2>

              <p>{items.description}</p>

              <h3>Category : {items.category}</h3>

              <h2 className="price">₹ {items.price}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}