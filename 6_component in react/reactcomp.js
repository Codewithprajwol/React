//react component is the react element where the type is function instead of any string tags and that function returns the jsx. It is the reusable piece of UI .. it can be export any where 
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
// const h1 = <h1>Prajwol Shrestha</h1>;
// console.log(h1);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1)

//technique 1
// root.render({
//     $$typeof:Symbol.for('react.element'),
//     type:'h1',
//     ref:null,
//     props:{
//         children:'helloboy'
//     }

// });

// technique 2
// root.render(React.createElement('h1',{},'helloboy'))

//technique 3

// root.render(<h1 className='hello'>hi</h1>)

//   function card(){
//     return {
//         $$typeof:Symbol.for('react.element'),
//     type:'h1',
//     ref:null,
//     props:{
//         children:'helloboy'
//     }
//     }
//   }

function Card({title,brand,image,price}) {
  // console.log(props)
  // const {title,brand,image,price}=props;
  return <div className="card">
    <img src={image} alt="iphone" />
    <div className="info">
     <h1>{title}</h1>
     <h3>{brand}</h3>
     <h3>{price}</h3>
     </div>
  </div>
}
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: card,
//   ref: null,
//   props: {
//     children:'hello',
//     title:'iphone',
//     brand:'apple',
//     price:'$1000',
//     image:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
// });

// console.log(React.createElement(card,{
//   children:'hello',
//   title:'iphone',
//   brand:'apple',
//   price:'$1000',
//   image:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'
// },))


// root.render(React.createElement(card,{
//   children:'hello',
//   title:'iphone',
//   brand:'apple',
//   price:'$1000',
//   image:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'
// },))

root.render(<Card title="iphone" brand="apple" price="$1000" image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"  />)