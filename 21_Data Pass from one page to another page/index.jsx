import React from "react";
import ReactDOM from "react-dom/client";
import App from "/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import Error from "./components/Error";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";

// let h1=React.createElement('h1',{className:'hello'},'hello rama');
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<Error />,
      children: [
        {
            path: "/",
            element:<Home />,
          },
        {
            path: "/contact",
            element:  <Contact />,
          },
        {
            path: "/:country",
            element: <CountryDetails />,
          },
      ],
    },
    
  ]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(    
<RouterProvider router={router} />
);
