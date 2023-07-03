import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../Pages/Home";
import AxiosProducts from "../components/AxiosProducts";
import ProductDetail from "../components/ProductDetail";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/products",
    element: <AxiosProducts />,
  },
  {
    id: 3,
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    id: 4,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 5,
    path: "/login",
    element: <Login />,
  },
];
