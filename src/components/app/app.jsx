import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import NotFoundPage from "../pages/not-found-page";

/**
 * @description
 *  Main application class
 */
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
