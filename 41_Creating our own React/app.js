import React from './react'
import { render } from './react-dom'
import './App.css'

// const h2=<h2>I love you RadhaKrishna</h2>
// const fruit=['apple','mango','banana','waterMelon']
// function Card(props){
// return (
// <div>
//     <h1 className='love' id='Divine Love'>yshi I love you very Much <b>Prajwol</b>
//     </h1>
//     {
//         fruit.map((fru)=><li className='list'>{fru}</li>)
//     }
// </div>)

// }
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

  fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    render(
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
      </div>,document.getElementById('root')
    );
  });
// render(<Card topic='love'></Card>,document.getElementById('root'))
