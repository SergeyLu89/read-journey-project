import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import {
  getLibraryBooksThunk,
  addLibraryBooksThunk,
  removeLibraryBooksThunk,
  createLibraryBooksThunk,
} from './libraryBooksOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const libraryBooksSlice = createSlice({
  name: 'library',
  initialState: {
    libraryBooks: [],
    isLoading: false,
    totalCount: null,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getLibraryBooksThunk.fulfilled, (state, { payload }) => {
        state.libraryBooks = payload;
        state.totalCount = payload.length;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(addLibraryBooksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalCount += 1;
        state.error = false;
      })
      .addCase(removeLibraryBooksThunk.fulfilled, (state, { payload }) => {
        state.libraryBooks = state.libraryBooks.filter(
          book => book._id !== payload.id
        );
        state.isLoading = false;
        state.totalCount -= 1;
      })
      .addCase(createLibraryBooksThunk.fulfilled, (state, { payload }) => {
        state.libraryBooks = [...state.libraryBooks, payload];
        state.isLoading = false;
        state.totalCount += 1;
        state.error = false;
      })
      .addMatcher(
        isAnyOf(
          getLibraryBooksThunk.pending,
          addLibraryBooksThunk.pending,
          removeLibraryBooksThunk.pending,
          createLibraryBooksThunk.pending
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          getLibraryBooksThunk.rejected,
          addLibraryBooksThunk.rejected,
          removeLibraryBooksThunk.rejected,
          createLibraryBooksThunk.rejected
        ),
        handleRejected
      ),
});

// const libraryConfig = {
//   key: 'library',
//   storage,
//   whitelist: ['libraryBooks'],
// };

// export const libraryReducer = persistReducer(
//   libraryConfig,
//   libraryBooksSlice.reducer
// );
export const libraryReducer = libraryBooksSlice.reducer;
