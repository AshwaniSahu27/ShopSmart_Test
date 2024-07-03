import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Products from "./components/AllProducts/Products.jsx";
import Test from "./components/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"all-products",
        element:<Products/>
      },
      
    ]
  },
  {
    path:"/test",
    element:<Test/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
