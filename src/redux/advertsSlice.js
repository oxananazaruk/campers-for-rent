import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.message = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.message = null;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    message: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length === 0) {
          state.message = 'Thats all adverts';
        }
        const idsToCheck = state.items.map((item) => item._id);
        const filteredItems = action.payload.filter(
          (item) => !idsToCheck.includes(item._id)
        );
        state.items = [...state.items, ...filteredItems];
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
