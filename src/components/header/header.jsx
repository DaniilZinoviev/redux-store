import React from "react";

import "./header.scss";

const Header = ({ count, total }) => {
  return (
    <header className="header row">
      <a href="#" className="header--logo text-dark">
        ReStore
      </a>
      <a href="#" className="header--cart">
        <i className="fa text-info fa-shopping-cart header--cart-icon"></i>
        <span className="text-dark">
          {count} items (${total})
        </span>
      </a>
    </header>
  );
};

export default Header;
