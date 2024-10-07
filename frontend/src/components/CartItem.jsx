import { useDispatch } from "react-redux";
import { remove } from "../slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const notify = () => {
    toast(`${product.name} removed from cart`);
  };

  const removeFromCartBtnOnClickHandler = () => {
    dispatch(remove(product.id));
    notify();
    // console.log(product.id);
  };

  const offer = Math.round((product.price / product.mrp) * 100);
  return (
    <div className="flex py-4 relative">
      <img src={product.image} alt="product.name" className="w-40" />
      <div>
        <h1>{product.name}</h1>
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
        {/* <h2>{product.price}</h2> */}
      </div>
      <button
        onClick={removeFromCartBtnOnClickHandler}
        className="fa fa-window-close text-lg absolute top-2 right-0 hover:text-red-600"
      ></button>
    </div>
  );
};

export default CartItem;
