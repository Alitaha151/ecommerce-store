import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api/api';
import { useCart } from '../context/CartContext';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-secondary btn-sm mb-3">
        ← Back to Products
      </Link>
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          {product.badge && (
            <span className="badge bg-warning text-dark mb-2">
              {product.badge}
            </span>
          )}
          <h2>{product.name}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success">
            ${product.price}
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through ms-2 fs-6">
                ${product.oldPrice}
              </span>
            )}
          </h4>
          <p className="mt-3">
            A premium quality product from our {product.category} collection.
          </p>

          <div className="d-flex align-items-center gap-3 my-3">
            <label className="fw-bold">Qty:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="form-control"
              style={{ width: '80px' }}
            />
          </div>

          <button
            className="btn btn-dark btn-lg w-100"
            onClick={() => addToCart(product, qty)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;