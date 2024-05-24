import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'services/axios';

// export const getLibraryBooksThunk = createAsyncThunk(
//   'books/own',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('books/own');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const getLibraryBooksThunk = createAsyncThunk(
  'books/own',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/own?${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addLibraryBooksThunk = createAsyncThunk(
  'books/add',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`books/add/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeLibraryBooksThunk = createAsyncThunk(
  'books/remove',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`books/remove/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createLibraryBooksThunk = createAsyncThunk(
  'books/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('books/add', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
