import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "./App";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
