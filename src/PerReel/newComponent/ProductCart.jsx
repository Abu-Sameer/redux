import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartStuff';

export default function ProductCart() {
  const dispatch = useDispatch();
  const addedProduct = useSelector((state) => state.holdCart);

  function removeProduct(id) {
    dispatch(remove(id));
  }
  return (
    <div className="container-fluid mtop">
      <h1>My cart goods</h1>
      {addedProduct < 1 ? (
        <h1>Your shopping cart is empty</h1>
      ) : (
        <div className="row ms-2">
          {addedProduct.map((product) => {
            return (
              <div key={product.id} className="col g-3">
                <div className="card h-100" style={{ width: '18rem' }}>
                  <div>{product.category}</div>
                  <div className="mt-2">
                    <img
                      src={product.image}
                      className="card-img-top pt-3"
                      alt="..."
                      style={{ width: '100px', height: '130px' }}
                    />
                  </div>
                  <h5>{product.title}</h5>
                  <div>{product.price}</div>
                  <div>
                    <span className="me-3">{product.rating.rate}🌟</span>
                    <span>{product.rating.count}👍🏾</span>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="btn btn-danger"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
