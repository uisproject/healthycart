import React from "react";
import Search from "../components/Search/Search";
import Category from "../components/Category/Category";
import ItemList from "../components/item/ItemList";
import { useState } from "react";
import AddedItem from "../components/item/AddedItem";
import useTab from "../customHooks/useTab";

const ShoppingPage = () => {
  const { category, setCategory } = useTab("fruit");
  const [search, setSearch] = useState("");
  const [totalCart, setTotalCart] = useState(0);

  // function to set category state
  const categoryHandler = (value) => setCategory(value);

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
