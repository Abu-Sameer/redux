import React from 'react';
import Product from './newComponent/Product';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCart from './newComponent/ProductCart';
import Counting from './newComponent/Counting';
import NavBar from './newComponent/NavBar';

export default function Apps() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="cartProduct" element={<ProductCart />} />
          <Route exact path="counter" element={<Counting />} />
        </Routes>
      </Router>
    </Provider>
  );
}
