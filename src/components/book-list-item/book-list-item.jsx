import React from "react";
import PropTypes from "prop-types";

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <div>
      <b>{title}</b> (<span>{author}</span>)
    </div>
  );
};

BookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
};

export default BookListItem;
