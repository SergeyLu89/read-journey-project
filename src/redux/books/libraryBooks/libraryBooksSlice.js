import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  getLibraryBooksThunk,
  addLibraryBooksThunk,
  removeLibraryBooksThunk,
  // createLibraryBooksThunk,
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
      .addMatcher(
        isAnyOf(getLibraryBooksThunk.pending, addLibraryBooksThunk.pending),
        handlePending
      )

      .addMatcher(
        isAnyOf(getLibraryBooksThunk.rejected, addLibraryBooksThunk.rejected),
        handleRejected
      ),
});

const libraryConfig = {
  key: 'library',
  storage,
  whitelist: ['libraryBooks'],
};

export const { addBookToLibrary, removeBookFromLibrary } =
  libraryBooksSlice.actions;

export const libraryReducer = persistReducer(
  libraryConfig,
  libraryBooksSlice.reducer
);
