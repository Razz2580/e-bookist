const CategoryCardHomePage = ({ category }) => {
  return (
    <div className="flex flex-col items-center w-28 sm:w-36 lg:w-48">
      <div className="bg-white w-28 h-28 rounded-full overflow-hidden flex justify-center items-center shadow-xl border border-stone-400 hover:shadow-2xl hover:scale-[101%] sm:w-36 sm:h-36 lg:w-48 lg:h-48">
        <img src={category.image} alt="mop" className="w-4/5" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mt-2">
        {category.title}
      </h3>
    </div>
  );
};

export default CategoryCardHomePage;
