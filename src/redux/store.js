// ========== HW-6 without Local Storage, with Slice =========
/*
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: contactsSlice.reducer,
      filter: filterSlice.reducer,
    }),
  },
});
*/

// ================== with redux-persist =========================
/*
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // localStorage

const rootReducer = combineReducers({
  items: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'phones',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
*/

// ========== HW-7 without RTK Query =========
/*
import { entities, isLoading, error } from './contacts/contactsReducers';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';


const contacts = combineReducers({
  entities,
  isLoading,
  error,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: {
    // contacts: combineReducers({
    //   items: contactsReducer,
    //   filter: filterSlice.reducer,
    // }),
    contacts,
    // filter: filterSlice.reducer,
  },
});
*/

// ----------- HW-7 RTK Query ----------------

// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { contactsApi } from './contactsSlice';
import { filterSlice } from './filterSlice';

// const rootReducer = combineReducers({
//   [contactsApi.reducerPath]: contactsApi.reducer,
//   //   filter: filterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    // rootReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// ???
setupListeners(store.dispatch);
