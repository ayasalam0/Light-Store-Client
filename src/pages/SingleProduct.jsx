import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetSignleProduct, AddCartQuantity } from "../Redux/Products";
import { UpdateCartItems } from "../Redux/Cart";
import useCart from "../Hooks/useCart";
import Button from "../components/buttons/Button";
import { AiFillHeart } from "react-icons/ai";
const SingleProduct = (props) => {
  const { add } = useCart();
  let params = useParams();
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);
  const Product = useSelector((state) => state.ProductData.Product);

  useEffect(() => {
    dispatch(GetSignleProduct(params.id));

    console.log(Cart);
  }, []);
  function AddToCart(product) {
    console.log(product);
    dispatch(UpdateCartItems(Product));
    console.log(Cart);
  }

  return (
    <div className=" flex flex-col pl-20  pr-20 pb-4  h-screen ">
      <h1 className=" text-4xl font-bold text-fontPrimary mb-10">
        Product Details{" "}
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="relative flex-1">
          <img
            src={Product?.image}
            alt="Product Image"
            className="flex-1 h-[600px] object-cover w-full"
          />
          {props.favourate ? (
            <AiFillHeart className="bg-fontPrimary absolute top-0 right-0 w-10 h-16 text-favourate  rounded-bl-lg rounded-tr-lg" />
          ) : (
            <button className="bg-fontPrimary absolute top-0 right-0 w-10 h-16 cursor-pointer text-white  rounded-bl-lg rounded-tr-lg ">
              {props.favourate ? (
                <AiFillHeart className=" w-9 h-9" />
              ) : (
                <AiFillHeart className="text-white  w-9 h-9" />
              )}
            </button>
          )}
        </div>

        <div className="flex flex-col justify-between flex-1">
          <span className="felx flex-col space-y-4">
            <h1
              className=" text-6xl font-bold text-fontPrimary
              "
            >
              {Product?.title}
            </h1>
            <p className="text-fontSecondary text-4xl font-bold">
              {Product?.price}$
            </p>
            <p className="text-fontSecondary font-light text-xl text-justify  w-3/4  ">
              {Product?.description}
            </p>
          </span>

          <div className="flex justify-between  ">
            <span className="flex flex-col space-y-4  ">
              <Button
                title="Add To Cart "
                className=" bg-fontSecondary rounded-lg  h-20 w-96"
                onClick={() => {
                  add(Product);
                }}
              />
              <Button title="Buy It " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
