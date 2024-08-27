const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "I love React Js"), /*#__PURE__*/React.createElement("p", null, "I love React Js very much"), /*#__PURE__*/React.createElement("img", {
  src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
  style: {
    width: '200px',
    backgroundColor: 'transparent',
    opacity: 0.5,
    borderRadius: '10px'
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-div"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  placeholder: "we love Radha"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-div"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "pwd"
}, "password"), /*#__PURE__*/React.createElement("input", {
  id: "pwd",
  placeholder: "we love Krishna",
  type: "password"
})))), /*#__PURE__*/React.createElement("p", null, "I love you RadhaKrishna"));
console.log(container);
const user = "Prajwol";
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user); //instead of user if we do console.log it will be undefined and react doesnot show that ..nether null and other may be ...reason later will be known.

const root = document.querySelector('#root');
const Prajwol = ReactDOM.createRoot(root);
Prajwol.render(container);

// const root = document.querySelector('#root')
// const Prajwol = ReactDOM.createRoot(root)// it may be for knowing or telling ReactDOM the root name present in the Html.

// Prajwol.render(container);// in my opinion it is for appending element... in this case container.. and setting the innertext ,text content and other may be.
//# sourceMappingURL=index.js.map