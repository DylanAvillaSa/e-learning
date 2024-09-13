import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const articleSlice = createSlice({
  name: "dataArticle",
  initialState,
  reducers: {
    postArticle: (state, action) => {
      state.value.push(action.payload);
    },

    deleteArticle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { postArticle, deleteArticle } = articleSlice.actions;

export default articleSlice.reducer;
