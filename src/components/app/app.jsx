import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import NotFoundPage from "../pages/not-found-page";
import Header from "../header/header";

import "./app.scss";

/**
 * @description
 *  Main application class
 */
const App = () => {
  return (
    <main role="main" className="container">
      <Header count={5} total={210} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default App;
