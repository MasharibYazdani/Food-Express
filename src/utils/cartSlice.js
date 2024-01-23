import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isExist = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (isExist) {
        // If item already exists, increment the quantity
        isExist.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload.card.info.id;

      state.items = state.items.map((item) =>
        item.card.info.id === itemId
          ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
          : item
      );

      state.items = state.items.filter((item) => item.quantity > 0);
    },

    clearCart: (state) => {
      state.items.length = 0;
      // console.log(current(state))  //To get the current state of the store

      // return { items: [] };   //This is the alternate way to make items empty
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
