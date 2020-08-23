import React, { useContext } from "react";
import BookServiceContext from "../book-service-context/book-service-context";

/**
 * @param {function=} mapServiceToProps
 *  A function to map service to specific component props
 */
const withBookService = (mapServiceToProps) => (WrappedComponent) => {
  return (props) => {
    const bookService = useContext(BookServiceContext);

    let serviceProps = { bookService };
    if (typeof mapServiceToProps === "function") {
      serviceProps = mapServiceToProps(bookService);
    }

    return <WrappedComponent {...props} {...serviceProps} />;
  };
};

export default withBookService;
