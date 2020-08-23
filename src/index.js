import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello world!</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
