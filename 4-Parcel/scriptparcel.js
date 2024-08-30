import ReactDOM from "react-dom/client"
const h2=<h1>Prajwol Shrestha</h1>
console.log(h2)
const root=ReactDOM.createRoot(document.querySelector('.root'));
root.render(h2);
console.log('Prajwol Shrestha!!');

// parcel(Bundlers) can do HMR- Hot Module Replacement. For example..

// if(module.hot){
//     module.hot.accept();// it make not to reload the page
// }


