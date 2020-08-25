import React from "react";
import { connect } from "react-redux";

import "./cart-table.scss";
import { addToCart } from "../../actions";

const CartTable = ({ items, total, onDecrement, onIncrement, onDelete }) => {
  const ResultRow = (item, idx) => {
    const { id, title, count, price } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td className="text-right">
          <button
            onClick={onDecrement}
            className="btn btn-outline-warning btn-sm mx-1"
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            onClick={onIncrement}
            className="btn btn-outline-success btn-sm mx-1"
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            onClick={onDelete}
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

const mapDispatchToProps = () => {
  return {
    onDecrement: (id) => {
      console.log(`onDecrement(${id})`);
    },
    onIncrement: addToCart,
    onDelete: (id) => {
      console.log(`onDelete(${id})`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
