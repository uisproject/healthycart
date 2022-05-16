const AddedItem = ({ totalCart }) => {
  const transformAnimation = () => {
    if (totalCart == 0) {
      return "translate(-50%,200%)";
    }

    return "translate(-50%,-150%)";
  };

  return (
    <div className="added-item__wrapper">
      <div
        className="added-item fixed z-10 bottom-0 left-[50%] flex justify-between max-w-[500px] w-[300px] bg-[#FD9E71] p-[10px] rounded-[15px] text-[#fff] "
        style={{
          transform: transformAnimation(),
          transition: "all 1s",
        }}
      >
        <span>Item Added to cart</span>
        <span>{totalCart}</span>
      </div>
    </div>
  );
};

export default AddedItem;
