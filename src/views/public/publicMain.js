import React from 'react'
import Detail from '../../layouts/public/DetailProduct';
import Form from '../../layouts/public/Form';
import Footer from '../../layouts/publicLayout/Footer';
import Header from '../../layouts/publicLayout/Header';
import Product from './Product/Product'
import About from './About/About';
import Register from './Register/Register';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import PrivateLayout from '../../layouts/private/privateLayout/PrivateLayout';
import UserAdmin from '../private/User/UserAdmin';
import ProductAdmin from '../private/Product/ProductAdmin';
import ProductCreate from '../private/Product/ProductCreate';
import Transport from './Transport/Transport';
import Order from '../private/Order/Order';
import UserCreate from '../private/User/UserCreate';
import Payment from './Payment/Payment'
import UploadFile from '../private/UploadFile/UploadFile';
import ReceiptDetails from './ReceiptDetails/ReceiptDetails';
import Test from '../public/Test/test';
import OrderConfrim from '../private/Order/OrderConfrim';

const PublicMain = () =>{
    const pathname = window.location.pathname;
  return (
    <div>
        {!pathname.includes("/admin") && <Header />}
         <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/detail" element={<Detail/>} />
    <Route path="/footer" element={<Footer/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/form" element={<Form/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/order" element={<Order/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/transport" element={<Transport/>} />
    <Route path="/receiptdetails" element={<ReceiptDetails/>} />
    <Route path="/test" element={<Test/>} />
    {/* -------------------admin----------------------- */}
    <Route path="/admin" element={<PrivateLayout />} />
    <Route path="/admin/user" element={< UserAdmin/>} />
    <Route path="/admin/user/form" element={< UserCreate/>} />
    <Route path="/admin/product" element={< ProductAdmin/>} />
    <Route path="/admin/product/uploadfile" element={< UploadFile/>} />
    <Route path="/admin/product/form" element={< ProductCreate/>} />
    <Route path="/admin/order" element={< OrderConfrim/>} />
    </Routes>
    </div>
  )
}

export default PublicMain