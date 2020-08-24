import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = ({ count, total }) => {
  return (
    <header className="header row">
      <Link to="/" className="header--logo text-dark">
        ReStore
      </Link>
      <Link to="/cart" className="header--cart">
        <i className="fa text-info fa-shopping-cart header--cart-icon"></i>
        <span className="text-dark">
          {count} items (${total})
        </span>
      </Link>
    </header>
  );
};

export default Header;
