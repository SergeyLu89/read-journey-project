import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getRedingBookThunk,
  startReadingThunk,
  finishReadingThunk,
  removeReadingThunk,
} from './readingBookOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const readingBookSlice = createSlice({
  name: 'reading',
  initialState: {
    readingBook: null,
    isWhileReading: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getRedingBookThunk.fulfilled, (state, { payload }) => {
        state.readingBook = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(startReadingThunk.fulfilled, (state, { payload }) => {
        state.readingBook = payload;
        state.isWhileReading = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(finishReadingThunk.fulfilled, (state, { payload }) => {
        state.readingBook = payload;
        state.isWhileReading = false;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(removeReadingThunk.fulfilled, (state, { payload }) => {
        state.readingBook = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(
        isAnyOf(
          getRedingBookThunk.pending,
          startReadingThunk.pending,
          finishReadingThunk.pending
          // removeReadingThunk.pending
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          getRedingBookThunk.rejected,
          startReadingThunk.rejected,
          finishReadingThunk.rejected
          // removeReadingThunk.rejected
        ),
        handleRejected
      ),
});

export const readingReducer = readingBookSlice.reducer;
