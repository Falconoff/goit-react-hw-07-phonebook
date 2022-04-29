// ------ without createAsyncThunk --------

/*
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';

export const entities = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});

export const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

export const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});
*/

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

// ------ with createAsyncThunk --------
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

export const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});
