import loadingGIF from "../../assets/Shopping cart.gif";

const Loading = () => {
  return (
    <div className="loading__wrapper absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="loading-gif__wrapper grid place-content-center">
        <img src={loadingGIF} />
      </div>
      <span className="mt-[10px]">Loading Fruits and Vegetables. . .</span>
    </div>
  );
};

export default Loading;
