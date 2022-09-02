import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Products";
import classNames from "classnames";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const PaginationValues = [1, 2, 3, 4];
  useEffect(() => {
    dispatch(fetchProducts(currentPage * 8));
  }, [currentPage]);

  return (
    <div className=" flex items-center justify-center ">
      {PaginationValues.map((value) => {
        return (
          <button
            className={classNames(
              "bg-white w-10 h-10 rounded-full flex justify-center items-center m-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",
              {
                "bg-fontPrimary text-white": currentPage === value,
              }
            )}
            onClick={() => {
              console.log(value);
              setCurrentPage(value);
            }}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
