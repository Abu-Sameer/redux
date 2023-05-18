import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice';

export default function Cart() {
  const added = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const emptyCart = added.length < 1;

  const removeItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="container-fluid">
      {emptyCart ? (
        <h3>Your cart is empty...</h3>
      ) : (
        <div className="row mt-3">
          {added.map((prod) => {
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
                    <p className="card-text">${prod.price}</p>{' '}
                    <span className="me-4">{prod.rating.rate}🌟</span>
                    <span>{prod.rating.count}👍🏾</span>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => removeItem(prod.id)}
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
