import { memo } from "react";

const Category = ({ img, title, categoryHandler }) => {
  return (
    <div
      className="category bg-[#F4F6F8] my-[20px] mx-0 rounded-[1em] cursor-pointer"
      onClick={() => {
        categoryHandler(title);
      }}
    >
      <div className="category--img__wrapper w-[150px] h-[100%] grid place-content-center">
        <img src={img} alt="" className="category--img w-[100px] h-[70px]" />
        <h4 className="text-center">{title}</h4>
      </div>
    </div>
  );
};

export default memo(Category);
