import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const ReceipeSlice = createSlice({
  name: "Receipe",
  initialState: [],
  reducers: {
    addToFavourite: (state, action) => {
      return [...state, { ...action.payload }];
    },
    RemoveFavourite: (state, action) => {
      return state.filter((receipe, index) => {
        console.log(action.payload);
        console.log(receipe.recipe.label);
        return receipe.recipe.label !== action.payload.ind;
      });
    },
  },
});

export const { addToFavourite, RemoveFavourite } = ReceipeSlice.actions;
export default ReceipeSlice.reducer;
