import React from "react";
import withBookService from "../hoc/withBookService";
import connect from "react-redux/lib/connect/connect";

/**
 * @description
 *  Main application class
 */
const App = ({ getBooks }) => {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};

const mapServiceToProps = ({ getBooks }) => {
  return {
    getBooks,
  };
};

export default withBookService(mapServiceToProps)(App);
