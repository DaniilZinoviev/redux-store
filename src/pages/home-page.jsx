import React from "react";
import BookList from "../components/book-list/book-list";

const HomePage = ({ bookService }) => {
  return (
    <div>
      <BookList />
    </div>
  );
};

export default HomePage;
