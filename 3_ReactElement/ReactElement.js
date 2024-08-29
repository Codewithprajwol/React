const container = React.createElement('h1', { className: 'container', id: 'container' },[ 
    React.createElement('section',{key:1}, //if array is passed key is necessary because react things there aer multiple children elements ...but in case of only one element we can remove array symbol and key as well..or we can keep key as it is even though array is removed ...it will not give any error
      [  React.createElement('p',{key:1},
            'I love React Js'
        ),
      React.createElement('p',{key:2},
            'I love React Js very much'
        ),
      React.createElement('img',{key:3, style:{width:200 , backgroundColor:'transparent', opacity:0.5, borderRadius:'10px'} ,src:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"},
        
        ),
       
]),
    React.createElement('section',{key:2}, 
      [  React.createElement('form',{key:1}, [
      React.createElement('div',{className:'input-div',key:1},
      [React.createElement('label',{key:2, htmlFor:'username'},'username'),
      React.createElement('input',{key:1, id:'username',placeholder:'we love Radha'}),
      
      ]
      ),
      React.createElement('div',{className:'input-div',key:2},
      [React.createElement('label',{key:2, htmlFor:'pwd'},'password'),
      React.createElement('input',{key:1, id:'pwd',placeholder:'we love Krishna',type:'password'}),
      
      ]
      )
      
      ]),
   
      
       
])
])//use of React



const root = document.querySelector('#root')
const Prajwol = ReactDOM.createRoot(root)// it may be for knowing or telling ReactDOM the root name present in the Html.

Prajwol.render(container);// in my opinion it is for appending element... in this case container.. and setting the innertext ,text content and other may be.

// Prajwol.render({
//     $$typeof: Symbol.for('react.element'),// it basically provides the security....it cannot be transfered through json.... and help prevent from rendering of malicious code from api ...as without $$typeof react cannot render the data to the DOM ..provides security.
//     "type": "h1",
//     "ref": null,
//     "props": {
//         "className": "heading1",
//         "children":[ {
//             $$typeof: Symbol.for('react.element'),
//             "type": "span",
//             "ref": null,
//             "props": {
//                 "children": [
//                     {
//                         $$typeof: Symbol.for('react.element'),
//                         "type": "button",
//                         "ref": null,
//                         "props": {
//                             "children": "Hello react button"
//                         }
//                     },
//                 ]
//             }
//         },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 "type": "b",
//                 "ref": null,
//                 "props": {
//                     "children": "Hello React"
//                 }
//             }
//         ]
//     },
// })

//let also see how to create element using vanilla javascript

// const h1=document.createElement('h1');

// h1.innerText="Hello vanilla JavaScript"
// console.dir(h1);
// h1.className="js"
// h1.setAttribute('class','React')

// const Prajwol= document.querySelector('#root');

// Prajwol.appendChild(h1)

console.log(React)

/* ABOVE CODE IS VERY LARGE BETTER THAN THE VANILLA JAVASCIPT DOCUMENT.CREATEELEMENT BUT RATHER THAN WRITING THIS HEAVY AND LITTLE COMPLEX CODE ...WE CAN SIMPLY WRITE IN OUR HTML FILE ....SO, TO MAKE IT SIMPLE (JSX) COMES INTO PICTURE AND IT'S LOOK SIMILAR TO THE HTML CODE THAT WE SEE IN NEXT PROJECT... */