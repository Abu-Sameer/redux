import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { getProducts } from '../store/productSlice';
import statusCode from '../utitl/StatusCode';

export default function Product() {
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === statusCode.LOADING) {
    return (
      <div>
        <span className="fs-3 fw-bold me-2">Loading please wait...</span>
        <span className="spinner-border spinner-border-sm"></span>
      </div>
    );
  }
  if (status === statusCode.ERROR) {
    return (
      <h2 className="alert alert-danger">
        Something went wrong! Try again later
      </h2>
    );
  }

  const AddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">
        {product.map((product) => {
          return (
            <div className="col mb-4" key={product.id}>
              <div className="card h-100" style={{ width: '18rem' }}>
                <div className="text-center">
                  <img
                    src={product.image}
                    className="card-img-top pt-3"
                    alt="..."
                    style={{ width: '100px', height: '130px' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="card-text">${product.price}</div>{' '}
                  <span className="me-4">{product.rating.rate}🌟</span>
                  <span>{product.rating.count}👍🏾</span>
                </div>
                <div className="card-footer">
                  <button
                    onClick={() => AddToCart(product)}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
