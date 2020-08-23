import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookService from "../hoc/withBookService";
import * as actions from "../../actions";

const BookList = ({ books, bookService, booksLoaded }) => {
  useEffect(() => {
    let books = bookService.getAllBooks();
    booksLoaded(books);
  }, [bookService, booksLoaded]);

  return (
    <div>
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default withBookService()(connect(mapStateToProps, actions)(BookList));
