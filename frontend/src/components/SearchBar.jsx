const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search product..."
        className="rounded-s-full sm:w-3/4 lg:w-3/5 text-stone-800 placeholder:text-stone-600 px-3 py-1"
      />
      <button className="fa fa-search bg-stone-600 rounded-e-full w-10 py-[0.55rem]"></button>
    </>
  );
};

export default SearchBar;
