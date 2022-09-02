import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts =
  (limit = 8) =>
  async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    console.log(response.data);
    dispatch(setProducts(response.data));
  };

export const FetchDisplayProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=5");

  dispatch(setDisplyProducts(response.data));
};
export const SortProducts = (type) => async (dispatch) => {
  const response = await axios.get(
    type.length > 0
      ? `https://fakestoreapi.com/products/category/${type}`
      : `https://fakestoreapi.com/products`
  );

  dispatch(setProducts(response.data));
};
export const GetSignleProduct = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

  dispatch(setProduct(response.data));
};

export const AddCartQuantity = (quant) => async (dispatch) => {
  if (quant) {
    dispatch(setCartQuantPluse(quant));
  } else {
    dispatch(setCartQuantMinus(quant));
  }
};
export const AddToFavourite = (id) => async (dispatch) => {
  dispatch(setFavourite(id));
};
export const FetchAllCategories = () => async (dispatch) => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  dispatch(setCategory(response.data));
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    Product: {},
    ProductsCart: [],
    CartQuant: 0,
    Favourite: [],
    Categories: [],
    DisplyProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.Product = action.payload;
    },

    setCartQuantPluse: (state, action) => {
      state.CartQuant = state.CartQuant + 1;
    },
    setCartQuantMinus: (state, action) => {
      if (state.CartQuant > 0) {
        state.CartQuant = state.CartQuant - 1;
      }
    },
    setFavourite: (state, action) => {
      state.Favourite.push(action.payload);
    },

    setDisplyProducts: (state, action) => {
      state.DisplyProducts = action.payload;
    },
    setCategory: (state, action) => {
      state.Categories = action.payload;
    },
  },
});

export const {
  setProducts,
  setProduct,
  setProductsCart,
  setCartQuantPluse,
  setCartQuantMinus,
  setFavourite,
  setDisplyProducts,
  setCategory,
} = productsSlice.actions;
export default productsSlice.reducer;
