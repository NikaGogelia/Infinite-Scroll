import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Page Not Found</h2>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default NotFound;
