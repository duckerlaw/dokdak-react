import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Male from "./components/Male";
import Female from "./components/Female";
import Kid from "./components/Kid";
import Fav from "./components/Fav";
import Bucket from "./components/Bucket";
import Signin from "./signin-up/Signin";
import {createBrowserRouter} from "react-router-dom"
import Signup from "./signin-up/Signup";
import Product from "./components/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Main />,
        index: true,
      },
      {
        path: "/home",
        element: "hello",
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/male",
        element: <Male />,
      },
      {
        path: "/female",
        element: <Female />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
      {
        path: "/bucket",
        element: <Bucket />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],    
  },
]);
