import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";

const DrawerCard = (props) => {
  return (
    <div className="    h-auto  bg-white rounded-lg relative ">
      <img
        className="rounded-lg h-48 w-full   object-contain "
        src={props.image}
        alt="Product Image"
      />
      <div className="bg-fontPrimary absolute top-0 right-0 w-10 h-16 flex items-center justify-center rounded-bl-lg rounded-tr-lg ">
        {props.quantity}
      </div>

      <div className="p-5 flex flex-col    space-y-4">
        <p className="mb-3 font-normal text-fontSecondary ">{props.category}</p>
        <span className="flex justify-between items-center">
          <h5 className="mb-2   text-xl font-light  text-fontPrimary">
            {props.name}
          </h5>
          <p className=" text-2xl font-bold text-fontPrimary">{props.price}$</p>
          <Button
            className=" underline text-fontSecondary  rounded-lg w-40  h-12 mb-4 self-end   "
            ParagraphStyle={props.ParagraphStyle}
            title={props.title}
            onClick={props.onRemove}
          />
        </span>
      </div>
    </div>
  );
};

export default DrawerCard;
