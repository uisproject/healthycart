import UseFetch from "../../customHooks/UseFetch";
import Loading from "../Loading/Loading";
import Items from "./items";
import { useEffect, useReducer, memo } from "react";

const calculateTotalItem = (itemData) => {
  let value = 0;
  itemData.forEach((item) => {
    value += item.total;
  });

  return value;
};

const ItemList = ({ category, search, totalCartHandler }) => {
  const { loading, data } = UseFetch(
    "https://raw.githubusercontent.com/cfg155/Dummy_APi/development/fruits/fruits.json"
  );

  const ACTION_TYPE = {
    ADDING_TOTAL_ATTRIBUTE: "addingTotalAttribute",
    ADDING_TOTAL: "addingTotal",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addingTotalAttribute":
        action.data.forEach((item) => {
          item.total = 0;
        });

        return { itemData: [...action.data] };
        break;

      case "addingTotal":
        return { itemData: [...state.itemData] };
        break;

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, { itemData: [] });

  const addingTotal = (id, value) => {
    let getSelectedItem = state.itemData.filter((item) => item.id == id)[0];
    getSelectedItem.total += value;

    if (getSelectedItem.total < 0) getSelectedItem.total = 0;
    totalCartHandler(calculateTotalItem(state.itemData));

    dispatch({
      type: ACTION_TYPE.ADDING_TOTAL,
      id: id,
      newData: getSelectedItem,
    });
  };

  useEffect(() => {
    dispatch({ type: ACTION_TYPE.ADDING_TOTAL_ATTRIBUTE, data: data });
  }, [data]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Items
          itemData={state.itemData}
          category={category}
          search={search}
          addingTotal={addingTotal}
        />
      )}
    </>
  );
};

export default memo(ItemList);
