import React from "react";
import ReactDOM from "react-dom";
import ShoppingPage from "./ShoppingPage";
import MyCartPage from "./MyCartPage";
import ProfilePage from "./ProfilePage";
import "./styles/index.css";

const App = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        height: "calc(100vh + 120px)",
        minHeight: "calc(100vh - 100px)",
        margin: "auto",
      }}
    >
      <ShoppingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
