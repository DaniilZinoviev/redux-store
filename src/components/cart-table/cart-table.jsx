import React from "react";

import "./cart-table.scss";

const CartTable = () => {
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

        <tbody>
          <tr>
            <td>1</td>
            <td>Martin Haverbeke "Eloquent Javascrtipt"</td>
            <td>4</td>
            <td>$54.00</td>
            <td className="text-right">
              <button className="btn btn-outline-warning btn-sm mx-1">
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-outline-success btn-sm mx-1">
                <i className="fa fa-plus"></i>
              </button>
              <button className="btn btn-outline-danger btn-sm mx-1">
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cart-table--total">Total: $512</div>
    </div>
  );
};

export default CartTable;
