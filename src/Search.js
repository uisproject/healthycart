import searchIcon from "./assets/search-icon.png";

const Search = ({ searchHandler }) => {
  return (
    <div className="search__wrapper w-[100%] relative">
      <div className="search-icon__wrapper w-[15px] absolute right-[10px] top-[50%] translate-y-[-50%] grid place-content-center">
        <img src={searchIcon} className="w-[100%]" />
      </div>
      <input
        type="text"
        onChange={(e) => {
          searchHandler(e);
        }}
        className="input-search w-[100%] h-[3em] rounded-[1em] border-hidden pr-[25px] pl-[15px] box-border bg-[#F4F6F8]"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
