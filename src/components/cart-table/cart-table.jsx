import React from "react";
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
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td className="text-right">
          <button
            onClick={() => onDecrement(id)}
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

  return (
    <div className="cart-table">
      <h3>Your order</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{items.map(ResultRow)}</tbody>
      </table>

      <div className="cart-table--total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
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
