const ActionItem = ({ text }) => {
  return (
    <div className="w-[50px] h-[50px] bg-[#F4F6F8] font-[2em] grid place-content-center rounded-[0.3em] mx-[5px] cursor-pointer">
      {text}
    </div>
  );
};

export default ActionItem;
