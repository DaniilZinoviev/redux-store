import React, { useEffect, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookService from "../hoc/withBookService";
import { fetchBooks } from "../../actions";
import { compose } from "../../utils";

import "./books-list.scss";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import { render } from "@testing-library/react";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (error) {
      return <ErrorIndicator error={error} />;
    }
    if (loading) {
      return <Spinner />;
    }
    return <BookList books={books} />;
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
  };
};

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
