import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookService from "../hoc/withBookService";
import * as actions from "../../actions";
import { compose } from "../../utils";

import "./books-list.scss";
import Spinner from "../spinner/spinner";

const BookList = ({ books, loading, bookService, booksLoaded }) => {
  useEffect(() => {
    bookService.getAllBooks().then((books) => {
      booksLoaded(books);
    });
  }, [bookService, booksLoaded]);

  let content = books.map((book) => <BookListItem book={book} key={book.id} />);
  return <ul className="book-list">{loading ? <Spinner /> : content}</ul>;
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

export default compose(
  withBookService(),
  connect(mapStateToProps, actions)
)(BookList);
