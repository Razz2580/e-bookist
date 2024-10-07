const AddToCartBtn = ({ addToCartBtnOnClickHandler }) => {
  return (
    <button
      onClick={addToCartBtnOnClickHandler}
      className="h-full w-full bg-stone-800 text-sm md:text-lg text-stone-100 font-semibold py-1 md:py-2 rounded-md hover:bg-stone-700"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
