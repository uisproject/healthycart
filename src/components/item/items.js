import Item from "./Item.js";

const Items = ({ itemData, category, addingTotal, search }) => {
  return (
    <div className="pb-[50px]">
      {itemData
        .filter((item) => item.type == category && item.name.includes(search))
        .map((item, idx) => {
          return <Item key={idx} {...item} addingTotal={addingTotal} />;
        })}
    </div>
  );
};

export default Items;
