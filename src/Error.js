import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="display-1">404 ERROR - PAGE NOT FOUND</h1>
      <p>The page youre looking for does not exist</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default Error;
