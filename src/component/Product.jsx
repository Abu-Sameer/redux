import React, { useEffect, useState } from 'react';

export default function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div className="row">
        {product.map((prod) => {
          return (
            <div className="col mb-5" key={prod.id}>
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
                  <p className="card-text">${prod.price}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
