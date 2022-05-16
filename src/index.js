import React from "react";
import ReactDOM from "react-dom";
import ShoppingPage from "./ShoppingPage";
import MyCartPage from "./MyCartPage";
import ProfilePage from "./ProfilePage";
import "./styles/index.css";

const App = () => {
  return (
    <div className="max-w-[400px] h-[calc(100vh + 120px)] max-h-[calc(100vh - 100px)] m-auto">
      <ShoppingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
