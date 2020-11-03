import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = ({ count, total }) => {
  return (
    <header className="header row">
      <Link to="/" className="header--logo text-dark">
        Redux Store
      </Link>
      <Link to="/cart" className="header--cart d-flex">
        <div className="position-relative">
          <i className="fa text-info fa-shopping-cart header--cart-icon"></i>

          <span className="badge badge-danger">{count}</span>
        </div>

        <span className="text-dark font-cursive">${total}</span>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    count: cartItems.reduce((sum, item) => sum + item.count, 0),
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(Header);
