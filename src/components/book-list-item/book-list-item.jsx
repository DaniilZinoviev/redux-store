import React from "react";
import PropTypes from "prop-types";

import "./book-list-item.scss";

const BookListItem = ({ book, onAddToCart }) => {
  const { title, author, price, image } = book;
  return (
    <div className="book-list-item">
      <div className="book-image">
        <img src={image} alt="Book" />
      </div>
      <div className="book-details">
        <a href="#" className="book-title h3">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button onClick={onAddToCart} className="btn btn-info">
          Add to cart
        </button>
      </div>
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
