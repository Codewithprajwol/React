import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Card(props) {
  //using destructuring...we get
  const { id, brand, images, title, price } = props;
  return (
    <div className="card" key={id}>
      <img src={images} />
      <div className="info">
        <h1>{brand}</h1>
        <p>{title}</p>
        <b>${price}</b>
      </div>
    </div>
  );
}
// const card = [Card(), Card(), Card()];

const root = ReactDOM.createRoot(document.querySelector("#root"));

// {
//   id:product.id,
//    brand:product.brand,
//     images:product.images[0],
//     title:product.title,
//     price:product.price
//  }
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              id={product.id}
              title={product.title}
              images={product.images[0]}
              price={product.price}
              brand={product.brand}
            />
           
          );
        })}
      </div>
    );
  });
