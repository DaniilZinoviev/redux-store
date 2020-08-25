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

export const addBookToCart = (id) => {
  return {
    type: "ADD_BOOK_TO_CART",
    payload: id,
  };
};

export const removeBookFromCart = (id) => {
  return {
    type: "REMOVE_BOOK_FROM_CART",
    payload: id,
  };
};

export const deleteBookFromCart = (id) => {
  return {
    type: "DELETE_BOOK_FROM_CART",
    payload: id,
  };
};

export const fetchBooks = (bookService, dispatch) => () => {
  dispatch(booksRequested());
  bookService
    .getAllBooks()
    .then((books) => dispatch(booksLoaded(books)))
    .catch((message) => dispatch(booksError(message)));
};
