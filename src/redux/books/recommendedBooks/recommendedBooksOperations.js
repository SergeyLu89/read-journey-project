import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'services/axios';

export const getRecommended = createAsyncThunk(
  'books/recommended',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('books/recommend');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
