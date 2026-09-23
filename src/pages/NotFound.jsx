import { Link } from 'react-router-dom';
const NotFound = () => (
  <div className="container text-center my-5">
    <h1>404</h1>
    <p>Page not found</p>
    <Link to="/" className="btn btn-dark">Go Home</Link>
  </div>
);
export default NotFound;