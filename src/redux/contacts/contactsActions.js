import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
// fulfilled
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
// rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');
