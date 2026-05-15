import { useState } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router";
import './App.css'
import Hero from './landpage/home/Hero.jsx'
import Homepage from './landpage/home/Homepage.jsx'
import Signup from './landpage/signup/Signup.jsx'
import About from './landpage/about/About.jsx'
import Product from './landpage/products/Product.jsx'
import PricingPage from './landpage/pricing/PricingPage.jsx'
import SupportPage from './landpage/support/SupportPage.jsx'
import NotFound from './landpage/NotFound.jsx';
import Footer from './landpage/Footer.jsx';
import Navbar from './landpage/Navbar.jsx';
import Home from './dashboard/components/Home.jsx';
import Summary from './dashboard/components/Summary.jsx';
import Orders from './dashboard/components/Orders.jsx';
import Holdings from './dashboard/components/Holdings.jsx';
import Positions from './dashboard/components/Positions.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
    
  },
  {
    path: "/signup",
    element:
    <div>
      <Navbar/>
      <Signup/>
      <Footer/>
    </div>
  },
  {
    path: "/about",
    element:
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  },
  {
    path: "/product",
    element:
    <div>
      <Navbar/>
      <Product/>
      <Footer/>
    </div>
  },
  {
    path: "/pricing",
    element:
    <div>
      <Navbar/>
      <PricingPage/>
      <Footer/>
    </div>
  },
  {
    path: "/support",
    element:
    <div>
      <Navbar/>
      <SupportPage/>
      <Footer/>
    </div>
  },
 
  {
  path: "/dashboard",
  element: <Home />,
  children: [
    { index: true, element: <Summary /> },
    { path: "orders", element: <Orders /> },
    { path: "holdings", element: <Holdings /> },
    { path: "positions", element: <Positions /> },
  ]
}
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />,

    </>
  )
}

export default App
