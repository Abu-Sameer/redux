import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartStuff';
import { fetchUser } from '../store/ProductApi';
import statusCode from '../utilitie/Status';

export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  function addCart(product) {
    dispatch(add(product));
  }

  if (status === statusCode.LOADING) {
    return <h1 className="mt-5 ">Loading please wait a moment</h1>;
  }
  if (status === statusCode.ERROR) {
    return <h1 className="mt-5 ">An error occur! Please try later</h1>;
  }

  return (
    <div className="container-fluid mtop">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => {
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
                    onClick={() => addCart(product)}
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
