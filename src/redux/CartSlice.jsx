import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        }

        if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  updateQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
