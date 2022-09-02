import { useSelector, useDispatch } from "react-redux";
import { UpdateCartItems } from "../Redux/Cart";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.CartItems) ?? [];
  useEffect(() => {
    const localValues = localStorage.getItem("CartItems");
    dispatch(UpdateCartItems(JSON.parse(localValues)));
  }, [dispatch]);

  console.log(cartItems);

  const add = (item) => {
    toast.success("Item added");
    const itemFound = cartItems?.find((cartItem) => cartItem.id === item.id);
    if (itemFound) {
      const NewCart = cartItems?.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      dispatch(UpdateCartItems(NewCart));
      localStorage.setItem("CartItems", JSON.stringify(NewCart));
    } else {
      const NewCart = [...cartItems, { ...item, quantity: 1 }];
      dispatch(UpdateCartItems(NewCart));
      localStorage.setItem("CartItems", JSON.stringify(NewCart));
    }
  };
  const remove = (item) => {
    toast.success("Item removed");
    const newCart = cartItems?.filter((cartItem) => cartItem.id !== item.id);
    dispatch(UpdateCartItems(newCart));
    localStorage.setItem("CartItems", JSON.stringify(newCart));
  };
  const itemsQuant = cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0);
  const total = cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  return {
    cartItems,
    add,
    remove,
    total: total.toFixed(1),
    itemsQuant,
  };
};

export default useCart;
