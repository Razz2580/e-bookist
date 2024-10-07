import CategoryCardHomePage from "../components/CategoryCardHomePage";

const categories = [
  {
    title: "Smart",
    image: "/images/mop_1.jpg",
  },
  {
    title: "T Mop",
    image: "/images/mop_2.jpg",
  },
  {
    title: "Spin Mop",
    image: "/images/mop_3.jpg",
  },
  {
    title: "Deck Mop",
    image: "/images/mop_8.jpg",
  },
  {
    title: "Smart Mop",
    image: "/images/mop_7.jpg",
  },
  {
    title: "Refills",
    image: "/images/refills.jpg",
  },
];

const Categories = () => {
  return (
    <div className="bg-stone-300 px-4 shadow-lg">
      <div className="flex items-end gap-4 py-6">
        <h2 className="text-3xl font-semibold">Categories</h2>
        <p>
          <a className="text-blue-700 hover:text-red-700 hover:cursor-pointer hover:underline">
            See All
          </a>
        </p>
      </div>
      <div className="flex justify-between gap-3 sm:gap-5 lg:gap-7 overflow-x-scroll scrollb items-center mb-4 pb-3 lg:pb-6">
        <CategoryCardHomePage category={categories[5]} />
        <CategoryCardHomePage category={categories[4]} />
        <CategoryCardHomePage category={categories[1]} />
        <CategoryCardHomePage category={categories[2]} />
        <CategoryCardHomePage category={categories[0]} />
        <CategoryCardHomePage category={categories[3]} />
        <div className="ml-4">
          <a
            href=""
            className="text-sm sm:text-base lg:text-lg whitespace-nowrap text-blue-600 hover:text-red-600 hover:underline"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
