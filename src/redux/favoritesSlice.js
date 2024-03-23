import { createSlice } from '@reduxjs/toolkit';

// const favoritesInitialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorites(state, action) {
      console.log(state);
      state.push(action.payload);
    },
    removeFavorites(state, action) {
      const index = state.findIndex((item) => item._id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
