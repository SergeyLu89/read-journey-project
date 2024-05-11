import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { recommendedReducer } from './books/recommendedBooks/recommendedBooksSlice';
import { libraryReducer } from './books/libraryBooks/libraryBooksSlice';
import { readingReducer } from './books/readingBook/readingBookSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recommended: recommendedReducer,
    library: libraryReducer,
    reading: readingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
