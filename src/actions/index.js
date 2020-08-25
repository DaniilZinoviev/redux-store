export const booksLoaded = (books) => {
  return {
    type: "FETCH_BOOKS_REQUEST",
    payload: books,
  };
};

export const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
  };
};

export const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const fetchBooks = (bookService, dispatch) => () => {
  dispatch(booksRequested());
  bookService
    .getAllBooks()
    .then((books) => dispatch(booksLoaded(books)))
    .catch((message) => dispatch(booksError(message)));
};

export const addToCart = (id) => {
  return {
    type: "ADD_BOOK_TO_CART",
    payload: id,
  };
};
