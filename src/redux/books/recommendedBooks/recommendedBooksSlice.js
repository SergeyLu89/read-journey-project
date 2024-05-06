import { createSlice } from '@reduxjs/toolkit';
import { getRecommended } from './recommendedBooksOperations';

const favoritesSlice = createSlice({
  name: 'recommended',
  initialState: {
    recommended: [],
    totalCount: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getRecommended.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecommended.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recommended = payload.results;
        console.log('payload: ', payload);
        // state.totalCount = payload.length;
      })
      .addCase(getRecommended.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const recommendedReducer = favoritesSlice.reducer;
