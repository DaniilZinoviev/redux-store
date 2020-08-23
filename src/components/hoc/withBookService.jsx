import React, { useContext } from "react";
import BookServiceContext from "../book-service-context/book-service-context";

/**
 * @param {function} mapServiceToProps
 *  A function to map service to specific component props
 */
const withBookService = (mapServiceToProps) => (WrappedComponent) => {
  const bookService = useContext(BookServiceContext);
  const serviceProps = mapServiceToProps(bookService);
  return (props) => <WrappedComponent {...props} {...serviceProps} />;
};

export default withBookService;
