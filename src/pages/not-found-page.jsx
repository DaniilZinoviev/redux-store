import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found.</h1>
      <p>The page you are looking for doesn't exist. Please, try again.</p>
      <p>
        <Link to="/">Return to home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
