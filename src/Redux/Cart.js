import { createSlice } from "@reduxjs/toolkit";

export const UpdateCartQuantity = (quant) => async (dispatch) => {
  dispatch(UpdateCartItems(quant));
};
const Cart = createSlice({
  name: "Cart",
  initialState: {
    CartItems: [],
    CartQuant: 0,
    CartTotal: 0,
  },
  reducers: {
    UpdateCartItems: (state, action) => {
      state.CartItems = action.payload;
    },
  },
});
export const { UpdateCartItems } = Cart.actions;
export default Cart.reducer;
