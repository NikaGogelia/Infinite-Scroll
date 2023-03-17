import React from "react";
import { Link, useRouteError } from "react-router-dom";

function LoaderError() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="loader-error">
      <h3>Error</h3>
      <p>{error.message}</p>
      <Link className="btn btn-primary" to="/">
        Go to home page
      </Link>
    </div>
  );
}

export default LoaderError;
