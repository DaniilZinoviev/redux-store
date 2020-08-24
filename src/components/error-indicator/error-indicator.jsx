import React from "react";

/**
 * @description
 *  An element to display error message
 */
const ErrorIndicator = ({ error }) => {
  return (
    <div>
      <h3>An unexpected error has been occured :( !</h3>
      <p>Please, try again later.</p>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
};

ErrorIndicator.defaultProps = {
  error: null,
};

export default ErrorIndicator;
