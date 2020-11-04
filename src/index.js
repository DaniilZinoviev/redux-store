import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookServiceContext from "./components/book-service-context/book-service-context";
import BookService from "./services/book-service";
import { createStore } from "redux";
import reducer from "./reducers";
import Cache from "./services/cache-service";

const cacheService = new Cache();

console.log(
  `cacheService.getAll()`,
  cacheService.getAll()
);
const store = createStore(reducer, cacheService.getAll());
store.subscribe(() => {
  cacheService.saveAll(
    store.getState()
  )
})

const bookService = new BookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookServiceContext.Provider value={bookService}>
        <Router>
          <App />
        </Router>
      </BookServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
