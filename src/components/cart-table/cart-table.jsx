import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./cart-table.scss";
import {
  addBookToCart,
  deleteBookFromCart,
  removeBookFromCart,
} from "../../actions";

const CartTable = ({ items, total, onDecrement, onIncrement, onDelete }) => {
  const ResultRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td className="d-none d-md-table-cell">{idx + 1}</td>
        <td data-title="Item">{title}</td>
        <td data-title="Count">{count}</td>
        <td data-title="Price">${total}</td>
        <td className="text-right" data-title="Actions">
          <button
            onClick={() => (count > 1 ? onDecrement(id) : null)}
            className="btn btn-outline-warning btn-sm mx-1"
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            onClick={() => onIncrement(id)}
            className="btn btn-outline-success btn-sm mx-1"
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm mx-1"
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  let content;
  if (items.length <= 0) {
    content = <p>Your cart is empty.</p>;
  } else {
    content = (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>{items.map(ResultRow)}</tbody>
        </table>

        <div className="cart-table--total">Total: ${total}</div>
      </Fragment>
    );
  }

  return (
    <div className="cart-table">
      <h3>Your cart</h3>
      {content}
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (id) => dispatch(removeBookFromCart(id)),
    onIncrement: (id) => dispatch(addBookToCart(id)),
    onDelete: (id) => dispatch(deleteBookFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
