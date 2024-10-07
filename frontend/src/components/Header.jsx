import { useState } from "react";
import SearchBar from "./SearchBar";
import { BrowserRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <div className=" bg-stone-800 sticky top-0">
      {searchClicked && (
        <div className="flex items-center justify-center gap-6 h-[62.71px]">
          <button
            className="w-8 h-8 rounded-full fa fa-arrow-left text-white hover:bg-stone-600"
            onClick={() => setSearchClicked(false)}
          ></button>
          <div>
            <SearchBar />
          </div>
        </div>
      )}
      {searchClicked || (
        <header className="w-5/6 mx-auto flex gap-6 text-slate-100 justify-between items-center py-3 sm:w-[100%] sm:pr-4">
          <div className="flex items-center">
            <img
              src="header_logo.png"
              alt="header logo"
              className="w-12 sm:w-16"
            />
            <h1 className="font-semibold text-2xl sm:text-2xl md:text-4xl">
              <a href="">MOPSHOP</a>
            </h1>
          </div>
          <div className="hidden sm:flex sm:flex-nowrap sm:flex-grow justify-center">
            <SearchBar />
          </div>

          <div className="flex gap-3 items-center text-sm sm:text-lg sm:gap-6">
            <button
              className="text-sm sm:hidden fa fa-search hover:bg-stone-600 rounded-full w-7 h-7"
              onClick={() => setSearchClicked(true)}
            ></button>
            <Link to="/cart">
              <div className="relative">
                <h2 className="">
                  <span className="fa fa-shopping-cart"></span> CART
                </h2>
                {cartItems.length > 0 && (
                  <div className="bg-stone-800 flex justify-center items-center rounded-full font-semibold absolute -right-2.5 -top-1.5 text-xs ring-1 ring-white text-white w-3 h-3">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>
            <h2>
              <a href="">
                <span className="fa fa-user"></span> LOGIN
              </a>
            </h2>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
