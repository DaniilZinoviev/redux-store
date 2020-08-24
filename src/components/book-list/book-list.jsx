import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookService from "../hoc/withBookService";
import * as actions from "../../actions";
import { compose } from "../../utils";

import "./books-list.scss";

const BookList = ({ books, bookService, booksLoaded }) => {
  useEffect(() => {
    let books = bookService.getAllBooks();
    booksLoaded(books);
  }, [bookService, booksLoaded]);

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default compose(
  withBookService(),
  connect(mapStateToProps, actions)
)(BookList);
