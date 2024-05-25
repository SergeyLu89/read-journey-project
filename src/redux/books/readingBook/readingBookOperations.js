import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'services/axios';

export const getRedingBookThunk = createAsyncThunk(
  'books/id',
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.get(`books/${_id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const startReadingThunk = createAsyncThunk(
  'books/reading/start',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('books/reading/start', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const finishReadingThunk = createAsyncThunk(
  'books/reading/finish',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('books/reading/finish', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeReadingThunk = createAsyncThunk(
  'books/reading/remove',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/books/reading?${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
