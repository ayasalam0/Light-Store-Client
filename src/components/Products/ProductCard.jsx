import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddToFavourite } from "../../Redux/Products";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const FavouriteArray = useSelector((state) => state.FavouriteArray.Favourite);

  const [AddedToFavourates, setAddedToFavourates] = useState(false);

  function AddToFavourates() {
    setAddedToFavourates(!AddedToFavourates);
    if (!AddedToFavourates) {
      dispatch(AddToFavourite(props.id));
      console.log(FavouriteArray);
      localStorage.setItem("Favourite", JSON.stringify(FavouriteArray));
      console.log(AddedToFavourates);
    }
  }
  return (
    <div className="bg-white rounded-lg relative w-full">
      <img
        className="rounded-lg w-full  image-full h-80 object-contain"
        src={props.image}
        alt="Product Image"
      />
      {props.favourate ? (
        <AiFillHeart className="bg-fontPrimary absolute top-0 right-0 w-10 h-16 text-favourate  rounded-bl-lg rounded-tr-lg" />
      ) : (
        <button
          className="bg-fontPrimary absolute top-0 right-0 w-10 h-16 cursor-pointer text-white  rounded-bl-lg rounded-tr-lg "
          onClick={AddToFavourates}
        >
          {AddedToFavourates ? (
            <AiFillHeart className="text-red-400   w-9 h-9" />
          ) : (
            <AiFillHeart className="text-white  w-9 h-9" />
          )}
        </button>
      )}
      <div className="p-5 flex flex-col     space-y-4 ">
        <span className="flex   items-end   justify-between ">
          <span>
            <p className="mb-3 font-normal text-fontSecondary ">
              {props.category}
            </p>
            <h5 className="mb-2 overflow-hidden  h-20   text-xl font-light  text-fontPrimary">
              {props.name}
            </h5>
          </span>
          <p className=" text-2xl font-bold text-fontPrimary">{props.price}$</p>
        </span>

        <Button
          className="bg-fontPrimary rounded-lg w-40  h-12 mb-4 self-end   "
          ParagraphStyle={props.ParagraphStyle}
          title={props.title}
          href={"/products/" + props.href}
        />
      </div>
    </div>
  );
};

export default ProductCard;
