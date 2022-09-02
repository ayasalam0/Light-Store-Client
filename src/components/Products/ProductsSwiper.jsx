import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from "../buttons/Button";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { FetchDisplayProducts } from "../../Redux/Products";
const ProductsSwiper = () => {
  const dispatch = useDispatch();

  const DisplyProducts = useSelector(
    (state) => state.DisplyProductsData.DisplyProducts
  );
  useEffect(() => {
    dispatch(FetchDisplayProducts());
  }, []);

  console.log(DisplyProducts);

  return (
    <div className=" pt-64 ">
      <h1 className=" pb-11  text-5xl font-normal pl-20">Explor Products</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        navigation={true}
        modules={[Navigation]}
      >
        {DisplyProducts.map((product) => {
          return (
            <SwiperSlide className="flex justify-center   ">
              <ProductCard
                category={product.category}
                name={product.title}
                price={product.price}
                image={product.image}
                href={product.id}
                title="View Product"
                ParagraphStyle="text-lg  text-white"
                id={product.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center">
        <Button
          className="bg-fontPrimary rounded-lg  w-96  h-20  mb-4 mt-12   "
          ParagraphStyle="text-2xl  text-white"
          title="View All Products "
          href={"/products"}
        />
      </div>
    </div>
  );
};

export default ProductsSwiper;
