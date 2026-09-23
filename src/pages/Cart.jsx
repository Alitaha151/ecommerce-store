import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/" className="btn btn-dark mt-3">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart ({totalItems} items)</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="card mb-3 shadow-sm" key={item.id}>
              <div className="row g-0 align-items-center">
                <div className="col-4 col-md-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-8 col-md-9">
                  <div className="card-body">
                    <h6>{item.name}</h6>
                    <p className="text-muted small mb-1">{item.category}</p>
                    <p className="fw-bold text-success mb-2">${item.price}</p>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                      <button
                        className="btn btn-sm btn-outline-danger ms-auto"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3">
            <h5>Order Summary</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Items</span><span>{totalItems}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total</span><span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-dark w-100 mt-3">Checkout</button>
            <button
              className="btn btn-outline-danger w-100 mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;