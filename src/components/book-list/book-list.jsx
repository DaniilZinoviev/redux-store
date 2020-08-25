import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookService from "../hoc/withBookService";
import { fetchBooks, addBookToCart } from "../../actions";
import { compose } from "../../utils";

import "./books-list.scss";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookListItem
          book={book}
          key={book.id}
          onAddToCart={() => onAddToCart(book.id)}
        />
      ))}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddToCart } = this.props;
    if (error) {
      return <ErrorIndicator error={error} />;
    }
    if (loading) {
      return <Spinner />;
    }
    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookService } = ownProps;

  return {
    fetchBooks: fetchBooks(bookService, dispatch),
    onAddToCart: (id) => dispatch(addBookToCart(id)),
  };
};

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
