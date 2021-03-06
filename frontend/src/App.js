import React from 'react';
import ReactDOM from "react-dom"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen  from './screens/CartScreen';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScree';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';

export default function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Header/>
    <main className='py-3'>
    <Container>
    
      <Routes>
      
        <Route path='/product/:id' element={<ProductScreen/>} />
        <Route path='/cart/:id' element={<CartScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/payment' element={<PaymentScreen/>} />
        <Route path='/placeorder' element={<PlaceOrderScreen/>} />
        <Route path='/orders/:id' element={<OrderScreen/>} />
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/profile' element={<ProfileScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/' element={<HomeScreen />}/>
        
      </Routes>
      <Footer />
      </Container>
      </main>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));