import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
import BookServiceContext from "../book-service-context/book-service-context";
import BookService from "../../services/book-service";

/**
 * @description
 *  Main application class
 */
const App = () => {
  const bookService = new BookService();
  return (
    <ErrorBoundary>
      <BookServiceContext.Provider value={bookService}>
        <div>
          <h2>App</h2>
        </div>
      </BookServiceContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
