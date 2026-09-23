const ErrorMessage = ({ message }) => (
  <div className="container my-5">
    <div className="alert alert-danger text-center">
      ⚠️ {message || 'Something went wrong'}
    </div>
  </div>
);
export default ErrorMessage;