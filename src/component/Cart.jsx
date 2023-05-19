import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice';

export default function Cart() {
  const added = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const emptyCart = added.length === 0;

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="container-fluid margin">
      {emptyCart ? (
        <h3>Your shopping cart is empty...</h3>
      ) : (
        <div className="row">
          <h1>My shopping cart</h1>
          {added.map((product) => {
            return (
              <div className="col mb-5" key={product.id}>
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
                      onClick={() => removeItem(product.id)}
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
