import { configureStore } from '@reduxjs/toolkit';

import { ContactsReducer } from './ContactSlice';
import { FilterReducer } from './FilterSlice';
import { UserReduser } from './UserSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: FilterReducer,
    user: UserReduser,
  },  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
