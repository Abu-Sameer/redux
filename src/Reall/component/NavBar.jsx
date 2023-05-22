import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const adding = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary position-fixed z-3 w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/">
          Redux Toolkits
        </a>
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
          <Link
            className="btn btn-primary text-light me-auto mb-2 mb-lg-0"
            to="/"
          >
            ToolKits products
          </Link>
          <div className="navBar-collapse justify-content-end">
            <Link className="btn btn-success text-light" to="/Cart">
              My shopping cart
              <i className="fa-solid fa-cart-shopping mx-2 text-light"></i>
              {adding.length}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// instal react-redux
