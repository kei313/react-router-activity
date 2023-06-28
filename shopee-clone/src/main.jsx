import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Root from "./pages/root.jsx";
import Index from "./pages/index.jsx";
import PhoneCase from "./pages/PhoneCase";
import LatoLato from "./pages/LatoLato";
import Dress from "./pages/Dress";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "PhoneCase",
            element: <PhoneCase />,
          },
          {
            path: "LatoLato",
            element: <LatoLato />,
          },
          {
            path: "Dress",
            element: <Dress />,
          },
        ],
      },
    ],
  },{
    path: "Login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
