import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  registerThunk,
  logInThunk,
  logOutThunk,
  fetchCurrentThunk,
} from './authOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.accessToken = payload.token;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { name: payload.name, email: payload.email };
        state.accessToken = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.user);
        state.user = { name: payload.name, email: payload.email };
        state.accessToken = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, logInThunk.pending, logOutThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        handleRejected
      ),
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const { setTokens } = authSlice.actions;
export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
