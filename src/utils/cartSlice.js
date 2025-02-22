import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    clearcart(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
