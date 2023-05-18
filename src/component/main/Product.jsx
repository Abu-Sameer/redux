import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/CartSlice';
import { getProduct } from '../../store/productSlice';

export default function Product() {
  const [isLoding, setIsLoding] = useState(false);
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  // const { data } = useSelector((state) => state.product);

  useEffect(() => {
    setIsLoding(true);
    dispatch(getProduct());
    setIsLoding(false);
  }, [dispatch]);

  const AddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {isLoding ? (
        <h3>Please wait...</h3>
      ) : (
        <div className="row">
          {products.map((prod) => {
            return (
              <div className="col mb-5  " key={prod.id}>
                <div className="card h-100" style={{ width: '18rem' }}>
                  <div className="text-center">
                    <img
                      src={prod.image}
                      className="card-img-top pt-3"
                      alt="..."
                      style={{ width: '100px', height: '130px' }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">${prod.price}</p>{' '}
                    <span className="me-4">{prod.rating.rate}🌟</span>
                    <span>{prod.rating.count}👍🏾</span>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => AddToCart(prod)}
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
      )}
    </div>
  );
}
