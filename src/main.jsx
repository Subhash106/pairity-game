import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recharge from "./pages/Recharge/index.jsx";
import Invite from "./pages/Invite/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Home from "./pages/Home/index.jsx";
import Playground from "./pages/Playground/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/recharge",
        element: <Recharge />,
      },
      {
        path: "/invite",
        element: <Invite />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/game/:id",
        element: <Playground />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
