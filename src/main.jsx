import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import MyCart from './pages/MyCart/MyCart';
import Register from './pages/Register/Register';
import LogIn from './pages/LogIn/LogIn';
import Loreal from './components/Loreal/Loreal';
import AuthProvider from './Providers/AuthProvider';
import Products from './components/Products/Products';
import AllProducts from './pages/Allproducts/AllProducts';
import PrivateRoute from './PrivateRoute';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: () => fetch('http://localhost:5000/product').then((response) => response.json())
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/allProducts",
        element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/products/:brand",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/loreal/:id",
        element: <PrivateRoute> <Loreal></Loreal></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product').then((response) => response.json())
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
