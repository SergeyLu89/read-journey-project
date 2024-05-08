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

// import { contactsReducer } from './contacts/slice';
// import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recommended: recommendedReducer,
    library: libraryReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
