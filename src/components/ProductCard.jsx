import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <div className="product-quick-actions">
          <button className="quick-action-btn" title="Wishlist">❤</button>
          <button className="quick-action-btn" title="Quick view">👁</button>
        </div>
      </div>

      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>

        <div className="product-price-row">
          <span className="product-price">${product.price}</span>
          {product.oldPrice && (
            <>
              <span className="product-old-price">${product.oldPrice}</span>
              <span className="product-discount">-{discount}%</span>
            </>
          )}
        </div>

        <button
          className="product-add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;