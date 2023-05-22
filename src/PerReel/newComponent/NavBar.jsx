import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const addedProduct = useSelector((state) => state.holdCart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary z-3 w-100 position-fixed ">
      <div className="container-fluid">
        <div className="navbar-brand">Product ToolKits</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/" className="navbar-nav me-auto mb-2 mb-lg-0">
            <button className="btn btn-primary">Product</button>
          </Link>
          <Link to="counter">
            <button className="btn btn-secondary">Counter</button>
          </Link>
          <Link to="cartProduct" className="ms-3">
            <button className="btn btn-success">
              My Cart
              <i className="fa-solid fa-cart-shopping mx-2 text-light"></i>
              {addedProduct.length}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
