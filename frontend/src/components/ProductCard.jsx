import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import StarRating from "./StarRating";

const Product = ({ product }) => {
  // console.log(product);
  const offer = Math.round((product.price / product.mrp) * 100);

  return (
    <div className="bg-stone-200 border border-slate-300 rounded-md flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="mop" />
        <div className="px-2 py-3 space-y-2 ">
          <h2 className="text-base md:text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-stone-800">
            <span className="font-semibold">
              <span>
                <StarRating outof={5} rating={product.rating} />
              </span>
            </span>{" "}
            ({product.numReviews})
          </p>
          <p>{product.brand}</p>
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">
              <span className="text-sm">₹ </span>
              {product.price}
            </h2>
            <h3 className="text-xs">
              MRP <span className="line-through">{product.mrp}</span>
            </h3>
            <p className="text-xs">({offer}%) off</p>
          </div>
        </div>
      </Link>
      {/* <div className="mt-auto">
        <AddToCartBtn />
      </div> */}
    </div>
  );
};

export default Product;
