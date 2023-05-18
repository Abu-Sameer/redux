import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const adding = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary position-sticky">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Product
              </Link>
            </li>
          </ul>
          <div className="navBar-collapse justify-content-end">
            <div>
              <Link to="/Cart">My Cart {adding.length}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// instal react-redux
