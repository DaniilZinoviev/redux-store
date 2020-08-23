export const booksLoaded = (books) => {
  return {
    type: "BOOKS_LOADED",
    payload: books,
  };
};
