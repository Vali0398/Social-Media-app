import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "./SignUp";
import App from "./App";
import Home from "./Home";
import { PostPage } from "./post";
import Profile from "./Profile";
import { OtherProfile } from "./.otherProfile";
import { Jerry } from "./Jerry";
import { Messages } from "./Messages";
import Chat from "./Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "App",
    element: <App />,
    children: [
      { index: "*", element: <Home /> },

      { path: "post", element: <PostPage /> },
      { path: "profile", element: <Profile /> },
      { path: "tom", element: <OtherProfile /> },
      { path: "jerry", element: <Jerry /> },
      {
        path: "messages",
        element: <Messages />,
      },
      { path: "/App/messages/:id", element: <Chat /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
