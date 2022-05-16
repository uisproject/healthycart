import React, { useCallback } from "react";
import Search from "./Search";
import Category from "./Category";
import ItemList from "./item/ItemList";
import { useState } from "react";
import AddedItem from "./item/AddedItem";

const ShoppingPage = () => {
  const [category, setCategory] = useState("fruit");
  const [search, setSearch] = useState("");
  const [totalCart, setTotalCart] = useState(0);

  // function to set category state
  const categoryHandler = useCallback(
    (value) => setCategory(value),
    [category]
  );

  // function to set search state
  const searchHandler = (e) => setSearch(e.target.value);

  // function to set Total Cart state
  const totalCartHandler = (value) => setTotalCart(value);

  return (
    <>
      <div className="home__wrapper">
        <Search searchHandler={searchHandler} />
        <div className="category__wrapper flex justify-around">
          <Category
            img="./assets/fruits.png"
            title="fruit"
            categoryHandler={categoryHandler}
          />
          <Category
            img="./assets/vegetables.png"
            title="vegetables"
            categoryHandler={categoryHandler}
          />
        </div>
        <ItemList
          category={category}
          search={search}
          totalCartHandler={totalCartHandler}
        />
        <AddedItem totalCart={totalCart} />
      </div>
    </>
  );
};

export default ShoppingPage;
