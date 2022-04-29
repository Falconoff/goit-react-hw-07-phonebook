import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';

const entities = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
