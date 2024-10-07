import { useParams } from "react-router-dom";
import products from "../products";
import StarRating from "../components/StarRating";
import AddToCartBtn from "../components/AddToCartBtn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/CartSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`http://127.0.0.1:8000/api/product/${param.id}`);
      const data = await res.json();
      setProduct(data);
    }
    getProducts();
  }, []);

  const notify = (message) => {
    toast(message);
  };

  const addToCartBtnOnClickHandler = () => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        notify("Product already added to cart");
        return;
      }
    }
    dispatch(add(product));
    notify(`${product.name} added to cart`);
  };

  const offer = Math.round((product.price / product.mrp) * 100);

  return (
    <>
      <div className="w-full flex flex-col gap-6 items-center px-3 py-6 sm:flex-row sm:items-start md:w-3/4 md:mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-1/2"
        />
        <div>
          <div className=" w-full space-y-2">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p>
              <span>
                <span className="text-xl">
                  <StarRating outof={5} rating={product.rating} />
                </span>
              </span>{" "}
              ({product.numReviews})
            </p>
            <p className="text-xl">{product.brand}</p>
            <div className="flex items-center gap-3">
              <p className="text-xl text-green-700">-{offer}%</p>
              <h2 className="text-4xl font-semibold">
                <span className="text-sm">₹ </span>
                {product.price}
              </h2>
            </div>
            <h3 className="text-md">
              MRP <span className="line-through">{product.mrp}</span>
            </h3>
          </div>
          <div className="mx-auto w-4/5 h-10 sm:mx-auto sm:w-full my-8">
            <AddToCartBtn
              addToCartBtnOnClickHandler={addToCartBtnOnClickHandler}
            />
          </div>
          <div className="sm:hidden lg:block border border-stone-400 shadow-xl rounded-md px-3 py-2">
            <h2 className="text-xl font-semibold">Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mx-4 md:w-3/4 md:mx-auto mb-8 justify-center hidden sm:block lg:hidden border border-stone-400 shadow-xl rounded-md px-3 py-2">
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default ProductDetailPage;
