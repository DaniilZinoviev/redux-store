import React from "react";
import BookList from "../book-list/book-list";
// import withBookService from "../hoc/withBookService";

const HomePage = ({ bookService }) => {
  // const books = bookService.getAllBooks();
  return (
    <div>
      <h1>Homepage</h1>
      <p>Books:</p>
      <BookList />
    </div>
  );
};

export default HomePage;
