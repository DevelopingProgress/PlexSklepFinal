import React from 'react'
import './App.css';

import {Home} from "./pages";
import LoginPage from "./pages/login";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import RegisterPage from "./pages/register";
import AddressPage from "./pages/address";
import PaymentMethodPage from "./pages/payment";
import PlaceOrderPage from "./pages/placeorder";
import OrderPage from "./pages/order";
import {BrowserRouter, Route} from "react-router-dom";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import AdminPage from "./pages/admin";
import HistoryPage from "./pages/history";
import ProductListPage from "./pages/productlist";
import ProductEditPage from "./pages/edit";
import OrderListPage from "./pages/orderlist";


function App() {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/product/:id" component={ProductPage} exact/>
        <Route path="/product/:id/edit" component={ProductEditPage} exact/>
        <Route path="/cart/:id?" component={CartPage} exact/>
        <Route path="/shipping" component={AddressPage}/>
        <Route path="/payment" component={PaymentMethodPage}/>
        <Route path="/placeorder" component={PlaceOrderPage}/>
        <Route path="/order/:id" component={OrderPage}/>
        <Route path="/history" component={HistoryPage}/>
        <PrivateRoute path="/profile" component={ProfilePage}/>
        <AdminRoute path="/admin" component={AdminPage}/>
        <AdminRoute path="/productlist" component={ProductListPage}/>
        <AdminRoute path="/orderlist" component={OrderListPage}/>
      </BrowserRouter>
  );
}

export default App;

