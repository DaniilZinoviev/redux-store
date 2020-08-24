import React from "react";
import BookList from "../book-list/book-list";
import CartTable from "../cart-table/cart-table";

const HomePage = ({ bookService }) => {
  return (
    <div>
      <BookList />
      <CartTable />
    </div>
  );
};

export default HomePage;
