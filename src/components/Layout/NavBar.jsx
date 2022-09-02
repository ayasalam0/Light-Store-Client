import React, { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import DrawerComponent from "../Drawer/DrawerComponent";
import useCart from "../../Hooks/useCart";
const NavBar = ({ children }) => {
  const { itemsQuant } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  console.log(itemsQuant);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="w-full flex  pt-12 pb-12 items-center  justify-evenly   overflow-x-hidden ">
        <div>
          <a
            href="/categories"
            className=" text-xl font-bold text-fontPrimary  "
          >
            Categories
          </a>
        </div>
        <div>
          <a href="/" className=" text-xl font-bold text-fontPrimary  ">
            Home
          </a>
        </div>
        <div>
          <a href="/products" className=" text-xl font-bold text-fontPrimary  ">
            Products
          </a>
        </div>
        <div className="flex space-x-4 ">
          <a
            href="/favourates"
            className=" text-xl font-bold text-fontPrimary  "
          >
            <AiFillHeart className="text-3xl " />
          </a>{" "}
          <button
            className=" text-xl font-bold text-fontPrimary relative  "
            onClick={toggleDrawer}
          >
            <AiOutlineShoppingCart className=" text-3xl " />
            <span className="w-4  h-4 bg-fontPrimary absolute rounded-full -top-1 right-0   text-xs   text-white  ">
              {itemsQuant}
            </span>
          </button>
        </div>
      </nav>
      {children}
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;
